import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../db/connection";
export default async function AcceptMailer(req: Request, res: Response) {
  const coddingSchema = z.object({
    mailer: z.string(),
  });

  const { mailer } = coddingSchema.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      mailer,
    },
  });

  if(user?.accept == true){
    return res.status(401).json({
      msg: "Não foi possível verificar este token",
    })
  }

  if (user) {
    const aprovedTokenMailer = await prisma.user.update({
      where: {
        mailer,
      },
      data: {
        accept: true,
      },
    });

    if (aprovedTokenMailer) {
      return res.status(200).json({
        msg: "Sua conta foi aceita com sucesso!",
        details: aprovedTokenMailer,
      });
    }
    else { 
      return res.status(401).json({
        msg: "Código inválido",
        details: aprovedTokenMailer
      })
    }
  } else {
    return res.status(401).json({
      msg: "Não foi possível verificar este token",
    })
  }
}
