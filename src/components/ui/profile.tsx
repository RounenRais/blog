// src/components/Profile.tsx (yolunu kendine göre uyarlarsın)
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className=" flex   w-100  justify-evenly items-center">
      <div className="text">
        <h1 className="text-4xl font-extrabold">Yunus Aksu</h1>
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
