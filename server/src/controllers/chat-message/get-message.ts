import { Request, Response } from "express";
import { prisma } from "../../db/connection";
import { io } from "../../http/server";

export default  async function GetMessages(req:Request, res:Response){
  
  const { id } = req.body

  const chat = await prisma.chat.findUnique({
    where:  {
      id
    },
    include:  {
      messages:true, 
      participants: {
        include: {
          chat: true, 
        }
      }
    }
  })

  io.to(`dashboard-${id}`).emit("getChat", await prisma.chat.findUnique({where:  { id}}))

  return res.status(200).json(chat)

}