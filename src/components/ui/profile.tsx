import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function Profile({ children }: { children: React.ReactNode }) {
  return (
<div className=" flex   gap-2 border w-100 p-2 justify-evenly">
<div className="text">
  <h1 className="text-4xl font-bold font-extrabold">Yunus Aksu</h1>
  <p className="text-sm text-muted-foreground">Web Developer</p>
  <p className="text-sm text-muted-foreground">(Frontend / Backend)</p>
</div>
  <Avatar className="h-auto w-20 border">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>
  );
}
