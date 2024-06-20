import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../../db/connection";
export default async function RemoveChat(req: Request, res: Response) {
  const removeChat = z.object({
    id_message: z.number(),
    chatId: z.string(),
  });

  const { id_message, chatId } = removeChat.parse(req.body);

  const existMessage = await prisma.message.findFirst({
    where: {
      id: id_message,
      chat: {
        id: chatId,
      },
    },
  });

  if (existMessage) {
    const remove = await prisma.message.delete({
      where: {
        id: id_message,
        chat: {
          id: chatId,
        },
      },
    });

    return res
      .status(200)
      .json({ msg: "Mensagem apagada com sucesso!", details: remove });
  } else {
    return res
      .status(401)
      .json({
        msg: "Não foi possível apagar essa mensagem",
        details: "Id Message not found",
      });
  }
}
