"use client"

import { ChatBubbleIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import chatpng from "../../../public/speech-bubble.png"
import Image from "next/image"
export default function Chat(){

  const [recent, setRecent] = useState(false)

  return (
    <div className="w-full h-screen flex items-center justify-center">

    {recent ? (
      //messgs
      <div className="flex items-center justify-center">
        </div>
    ) : (
      <>
      <div className="flex items-center justify-center flex-col">
          <Image src={chatpng} alt="msg" className="w-[40%]"/>
          <h1 className="text-3xl ">Envie suas Mensagens Criptografadas</h1>
          <span className="text-muted-foreground">Suas mensagem não podem ser vista por nenhum funcionário <b>Ativo ou Não Ativo</b> </span>
      </div>

      
      </>
    )}

    </div>
  )
}