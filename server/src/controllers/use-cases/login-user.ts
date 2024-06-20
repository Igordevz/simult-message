import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../db/connection";
import bcrypt from "bcrypt";
export default async function LoginUser(req: Request, res: Response) {
  const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const { email, password } = loginSchema.parse(req.body);

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if(userExist?.accept == false){
    return res.status(401).json({accept: false})
  }

  if (userExist) {
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (isPasswordValid) {
      return res
        .status(200)
        .json({
          msg: "Login realizado com sucesso!",
          details: userExist?.token,
        });
    }
  } else {
    return res.status(401).json({ msg: "Usuário ou senha incorretos" });
  }
}
