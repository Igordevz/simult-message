import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../db/connection";

export default async function CreateChat(req: Request, res: Response) {
  try {
    const usersSchema = z.object({
      userId: z.string(),
      email: z.string(),
    });

    const { userId, email } = usersSchema.parse(req.body);

    const isUser = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    const getUser = await prisma.user.findUnique({
      where: {
        email: email
      }, 
    })

    if(isUser?.id){


    if(getUser?.id){
      const createChat = await prisma.chat.create({
        data: {
          participants: {
            create: [
              { userId: getUser?.id },
              { userId: userId }
            ]
          }
        },
        include: {
          participants: {
            include: {
              user: true
            }
          }
        }
      });
  
      res.status(201).json(createChat);
    } else {
      return res.status(401).json({msg: "Este usuário não existe" , details: getUser})
    }
  } else {
    return res.status(401).json({msg: "Você precisa fazer o login", expired:true})
  }

   
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
