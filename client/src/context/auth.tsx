"use client";
import { useToast } from "@/components/ui/use-toast";
import { baseUrl } from "@/services/api";
import moment from "moment";
import { ReactNode, createContext, useEffect, useState } from "react";
import "moment/locale/pt-br";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export const contextApi = createContext({});

interface Children {
  children: ReactNode;
}
export default function ContextProvider({ children }: Children) {
  const [terms, setTerms] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const user:any = Cookies.get("@auth-token");
    if(user){
      return false; 
    }
    async function fetch() {
      const data = await baseUrl.post("/api/users/token", {
        token: JSON.parse(user),
      });

      if (data?.data) {
        router.push("/");
      } else {
        Cookies.remove("@auth-token");
      }
    }

    fetch();
  }, []);

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
        password: infoUser?.password,
      });

      if (data?.data) {
        Cookies.set("@auth-token", JSON.stringify(data?.data?.details?.token));
        location.reload();
      }
      return toast({
        title: "Criação Aprovada ✅",
        description: data?.data?.msg,
      });
    } catch (error: any) {
      return toast({
        title: "Algo falhou na sua solicitação",
        description: error?.response?.data?.msg,
      });
    }
  }

  return (
    <contextApi.Provider value={{ singIn, setTerms, terms }}>
      {children}
    </contextApi.Provider>
  );
}
