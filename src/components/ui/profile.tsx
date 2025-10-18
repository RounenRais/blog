// src/components/Profile.tsx (yolunu kendine göre uyarlarsın)
 "use client" 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Fonts from "./fonts";
export default function Profile() {
  return (
    <div className=" flex   w-120  justify-around items-center">
          <Fonts />

      <div className="text">
        <h1 className="text-4xl  ">Yunus Aksu</h1>
        <p className="text-sm text-muted-foreground">Web Developer</p>
        <p className="text-sm text-muted-foreground">(Frontend / Backend)</p>
      </div>
      <Avatar className="h-auto w-24 border border-white">
        <AvatarImage src="./super-cool-me.jpeg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
