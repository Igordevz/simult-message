import { Request, Response } from "express";
import { prisma } from "../../db/connection"
export default async function InformationUser(req:Request, res:Response){

  const { token } = req.body

  const fetchUser = await prisma.user.findUnique({ 
    where: {
      token
    },
    include: {
      chats:true
    }
  })

  if(fetchUser){
    return res.status(200).json(fetchUser)
  }
  else {
    return res.status(501).json({expired: true})
  }   

}