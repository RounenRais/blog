import React from "react";
import { Badge } from "@/components/ui/badge";
import Profile from "../components/ui/profile";
import  Work  from "../components/work";
export default function Home() {
  return (
    <div className=" items-center w-full justify-center flex  flex-col gap-6 ">
      <Badge className=" p-3">
        Hello, I&apos;m an indie app developer based from Turkiye!
      </Badge>
      <Profile></Profile>
      <Work></Work>

    </div>
  )
}