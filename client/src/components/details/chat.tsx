"use client";

import { ChatBubbleIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import chatpng from "../../../public/speech-bubble.png";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export default function Chat() {
  const [recent, setRecent] = useState();
  return (
    <div className="w-full h-screen flex items-center justify-center relative ">
      {recent ? (
        <div className="flex items-center justify-center"></div>
      ) : (
        <>
          <div className="flex items-center justify-center flex-col relative">
            <Image src={chatpng} alt="msg" className="w-[40%]" />
            <h1 className="text-3xl ">Envie suas Mensagens Criptografadas</h1>
            <span className="text-muted-foreground">
              Suas mensagem não podem ser vista por nenhum funcionário{" "}
              <b>Ativo ou Não Ativo</b>{" "}
            </span>
            <footer className="fixed rigth-0 bottom-5 w-[80%] flex items-center justify-center">
              <form className="w-5/6 flex flex-row  items-center justify-center gap-2">
                <Input placeholder="Insira uma nova mensagem" type="text" />
                <Button type="submit" variant="default">
                  {" "}
                  <MagnifyingGlassIcon />{" "}
                </Button>
              </form>
            </footer>
          </div>

          <div></div>
        </>
      )}
    </div>
  );
}
