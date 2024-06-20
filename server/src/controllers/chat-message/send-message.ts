import { prisma } from "../../db/connection";
import { Response, Request } from "express";
import { z } from "zod";

export default async function SendMessage(req: Request, res: Response) {
  try {
    const messageSchema = z.object({
      user: z.string(),
      chatId: z.string(),
      message: z.string(),
    });

    const { user, chatId, message } = messageSchema.parse(req.body);

    const sendMessage = await prisma.message.create({
      data: {
        chatId: chatId,
        message,
        id_user: user,
      },
      include: {
        chat: true,
      },
    });

    res.status(201).json(sendMessage); 
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}
