import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {  

  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="sm:min-w-[400px]   ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Este login ficará salvo em nosso sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Label htmlFor="email">Insira seu Email</Label>
            <Input placeholder="example@gmail.com" id="email" />
            <br />
            <Label htmlFor="password">Insira sua Senha</Label>
            <Input
              placeholder="example@gmail.com"
              id="password"
              type="password"
            />
            <br />
            <Button className="w-full">Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
