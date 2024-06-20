import { Router } from "express";
import CreateUser from "../../controllers/use-cases/create-user";
import LoginUser from "../../controllers/use-cases/login-user";
import InformationUser from "../../controllers/use-cases/information-user";
import AcceptMailer from "../../controllers/use-cases/accept-mailer";
import CreateChat from "../../controllers/chat-message/create-chat";
import GetMessages from "../../controllers/chat-message/get-message";
import SendMessage from "../../controllers/chat-message/send-message";
import RemoveChat from "../../controllers/chat-message/remove-message";
import EditChat from "../../controllers/chat-message/edit-message";

export const router = Router();

router.get("/", (req, res) => {
  return res.status(200).send("http server running 🔥");
})

router.post("/api/users", CreateUser)
router.post("/login", LoginUser)
router.post("/api/users/token", InformationUser)
router.put("/api/users/valid", AcceptMailer)

// messages

router.post("/api/chat", CreateChat)
router.post("/api/messages/get", GetMessages)
router.post("/api/messages", SendMessage)
router.delete("/api/messages", RemoveChat)
router.put("/api/message/edit", EditChat)