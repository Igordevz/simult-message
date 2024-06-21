import express from "express"
import { router } from "./router/router";
import { Server } from "socket.io"
import http from "http"
<<<<<<< HEAD
import { server } from "typescript";
const app = express();

app.use(express.json())

=======
import cors from "cors"
const app = express();

app.use(express.json())
app.use(cors())
>>>>>>> master
app.use(router)

const serverWeb = http.createServer(app)
export const io = new Server(serverWeb)

io.on("connect", (socket) => {
  console.log(socket?.id)
})
app.listen(8080, () =>{
  console.log("http server running 🔥")
})