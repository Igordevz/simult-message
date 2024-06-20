import { Request, Response } from "express";
import { z } from "zod"
import { prisma } from "../../db/connection";
export default async function EditChat(req:Request, res:Response){

  const messageSchema = z.object({
    chatId: z.string(),
    id_message: z.number(),
    message: z.string()
  })

  const { chatId, id_message, message } = messageSchema.parse(req.body)


  const existMessage = await prisma.message.findFirst({
    where: {
      id: id_message,
      chat: {
        id: chatId,
      },
    },
  });

 if(existMessage){
    const edit = await prisma.message.update({
      where: {
        id: id_message,
        chat: {
          id: chatId
        }
      },
      data: {
        message
      }
    })

    return res.status(200).json({msg: "Mensagem editada com sucesso!", details: edit})
 } else {
  return res.status(401).json({msg: "Não foi possivel editar esta mensagem",  details: 
    "Not found message"
  })
 }
} 