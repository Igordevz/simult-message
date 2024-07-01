import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Users } from "@/components/details/users";
export default function Home() {
  const truncateMessage = (message:any, maxWords:any) => {
    const words = message.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return message;
  }
  return (
    <main className="">
      <aside className="w-[340px] h-full fixed flex flex-col p-4 border-r-[1px]">
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
          {Users.map((user, _i) => {
            return (
              <>
                <div className=" flex flex-row  gap-2 items-center cursor-pointer hover:opacity-55">
                  <Avatar>
                    <AvatarImage src={user.photo_URL} />
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1>{user?.name}</h1>
                    <Label htmlFor="#" className="text-muted-foreground">
                    {truncateMessage(user?.message, 5)} {/* Limite de 10 palavras */}
                    </Label>
                  </div>
                  {user?.view == true ? (
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
