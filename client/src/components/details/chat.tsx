"use client";

import { ChatBubbleIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useContext, useState } from "react";
import chatpng from "../../../public/speech-bubble.png";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { contextApi } from "@/context/auth";
export default function Chat(message: any) {
  const [recent, setRecent] = useState(message);
  const { user }: any = useContext(contextApi);
  return (
    <div className="w-full h-screen flex relative ">
      {recent ? (
        <div className="flex flex-col relative w-full">
          <main className="w-full flex flex-col absolute top-0">
            {recent.message.map((message: any, _i: any) => {
              return (
                <div
                  className={
                    message?.id_user != user?.id
                      ? "w-full flex items-start flex-col  my-2 "
                      : "w-full flex items-end flex-col  my-2"
                  }
                >
                  <div
                    className="flex items-start flex-col bg-muted mx-4 border p-2 rounded-md
                   md:min-w-[200px] min-w-[full]py-2"
                  >
                    <h1 className="text-xl font-bold">Igor</h1>
                    <span>{message?.message}</span>
                  </div>
                </div>
              );
            })}
          </main>
          <footer className="fixed rigth-0 bottom-0 pb-5 w-[80%] flex items-center z-10 justify-center 
             rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <form className="w-5/6 flex flex-row  items-center justify-center gap-2">
              <Input placeholder="Insira uma nova mensagem" type="text" />
              <Button type="submit" variant="default">
                {" "}
                <MagnifyingGlassIcon />{" "}
              </Button>
            </form>
          </footer>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center flex-col relative">
            <Image src={chatpng} alt="msg" className="w-[40%]" />
            <h1 className="text-3xl ">Envie suas Mensagens Criptografadas</h1>
            <span className="text-muted-foreground">
              Suas mensagem não podem ser vista por nenhum funcionário{" "}
              <b>Ativo ou Não Ativo</b>{" "}
            </span>
            <footer
              className="fixed rigth-0 bottom-0 pb-5 w-[80%] flex items-center z-10 justify-center 
             bg-primary-foreground rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border "
            >
              <form className="w-5/6 flex flex-row  items-center justify-center gap-2">
                <Input placeholder="Insira uma nova mensagem" type="text" />
                <Button type="submit" variant="default">
                  {" "}
                  <MagnifyingGlassIcon />{" "}
                </Button>
              </form>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
