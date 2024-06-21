"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

// ajudstar
import moment from "moment";
import "moment/locale/pt-br";
import { baseUrl } from "@/services/api";
export default function Page() {
  const [terms, setTerms] = useState(false);
  const { toast } = useToast();

  const userSchema = z.object({
    name: z.string().min(2, "Insira uma nome completo"),
    email: z.string().email("insira um email válido"),
    password: z.string().min(8, "Sua senha deve conter no mínimo 8 dígitos"),
  });

  type createUserFormData = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(userSchema),
  });
  async function singIn(infoUser: any) {
    if (!terms) {
      return toast({
        title: "Aceite os termos de condições para continuar",
        description: moment(Date.now()).fromNow(),
      });
    }
    
    try {
      const data = await baseUrl.post("/api/users", {
        name: infoUser?.name,
        email: infoUser?.email,
        password: infoUser?.password
      })
      
      if(data?.data){
        console.log(data)
      } 
      return toast({
        title: "Algo falhou na sua solicitação",
        description: data?.data.msg,
      });

    } catch (error:any) {
      return toast({
        title: "Algo falhou na sua solicitação",
        description: error?.response.data?.msg,
      });
    }

  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="sm:min-w-[400px]   ">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>
            siga as indicações abaixo, para obter um melhor resultado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(singIn)}>
            <Label htmlFor="#name">Insira seu Nome Completo</Label>
            <Input
              placeholder="Nome Completo"
              id="#name"
              {...register("name")}
            />
            <p className="text-destructive text-sm">{errors?.name?.message}</p>
            <br />
            <Label htmlFor="#email">Coloque seu Email</Label>
            <Input
              placeholder="example@gmail.com"
              id="email"
              {...register("email")}
            />
            <p className="text-destructive text-sm">{errors?.email?.message}</p>

            <br />
            <Label htmlFor="#password">Coloque sua Senha</Label>
            <Input
              placeholder="example@gmail.com"
              id="password"
              type="password"
              {...register("password")}
            />
            <p className="text-destructive text-sm">
              {errors?.password?.message}
            </p>

            <div className="flex items-center space-x-2 my-4">
              <Checkbox id="terms" onClick={() => setTerms(!terms)} />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <Button className="w-full" type="submit">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
