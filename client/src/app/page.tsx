import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Users } from "@/components/details/users";
export default function Home() {
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
        <div className="flex flex-col gap-4 mt-4">
          {Users.map((index, _i) => {
            return (
              <>
                <div className=" flex flex-row  gap-2 items-center cursor-pointer hover:opacity-55">
                  <Avatar>
                    <AvatarImage src={index.photo_URL} />
                    <AvatarFallback>{index?.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1>{index?.name}</h1>
                    <Label htmlFor="#" className="text-muted-foreground">
                      {index.message}
                    </Label>
                  </div>
                  {index?.view == true ? (
                    <span className="flex h-2 w-2 mb-6 rounded-full bg-sky-500" />
                  ) : (
                    ""
                  )}
                </div>
              </>
            );
          })}
        </div>
      </aside>
    </main>
  );
}
