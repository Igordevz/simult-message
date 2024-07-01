"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { useState } from "react";
export default function Home() {
  const [ notify, setNotify ] = useState(true)
  return (
    <main className="">
      <aside className="w-[300px] h-full fixed flex flex-col p-4">
        <div>
          <h1 className="mb-2">Mensagens</h1>
          <form className="flex flex-row ">
            <Input placeholder="Procure uma conversa" type="text" />
            <Button variant={"ghost"}>
              {" "}
              <MagnifyingGlassIcon />{" "}
            </Button>
          </form>
        </div>
        <div className="my-10 flex flex-row items-center gap-2 cursor-pointer hover:opacity-55">
          <Avatar>
            <AvatarImage src="https://github.com/igordevz.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1>Igor Santos</h1>
            <Label htmlFor="#" className="text-muted-foreground">
              Sabia que vc é barril dobreado
            </Label>
          </div>
          {notify  ? (
          <span className="flex h-2 w-2 mb-6 rounded-full bg-sky-500" />
          ): (
            <></>
          )}
        </div>
      </aside>
    </main>
  );
}
