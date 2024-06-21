import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "../../db/connection";
export default async function CreateUser(request: Request, response: Response) {
  try {
    const userSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
    });
    const { name, email, password } = userSchema.parse(request.body);
    const salt = await bcrypt.genSalt(12);
    const passwordHas = await bcrypt.hash(password, salt);
    function generateRandomCode() {
      let randomCode = Math.floor(10000 + Math.random() * 90000);
      return randomCode;
    }
    let randomCode = generateRandomCode();
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist?.password) {
      return response.status(401).json({
        msg: "Este usuário ja existe",
        details: "O email inserido já foi cadastrado.",
      });
    }

    await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHas,
        mailer: randomCode.toString(),
      },
    });

    return response.status(201).json({ msg: "usuário criado com sucesso" });
  } catch (error) {
    console.log(error);
    return response
      .status(401)
      .json({ msg: "Error na criação do usuário", error: error });
  }
}
