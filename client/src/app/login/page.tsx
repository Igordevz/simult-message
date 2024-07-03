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
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { contextApi } from "@/context/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export default function Page() {
  const { Login }: any = useContext(contextApi);

  const userSchema = z.object({
    email: z.string().email("insira um email válido"),
    password: z.string().min(8, "Senha inválida"),
  });
  type createUserFormData = z.infer<typeof userSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(userSchema),
  });
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="sm:min-w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Este login ficará salvo em nosso sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(Login)}>
            <Label htmlFor="email">Insira seu Email</Label>
            <Input
              placeholder="example@gmail.com"
              id="email"
              {...register("email")}
            />
            <p className="text-destructive text-sm">{errors?.email?.message}</p>
            <br />
            <Label htmlFor="password">Insira sua Senha</Label>
            <Input
              {...register("password")}
              placeholder="example@gmail.com"
              id="password"
              type="password"
            />
            <p className="text-destructive text-sm">
              {errors?.password?.message}
            </p>
            <br />
            <Button className="w-full">Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
