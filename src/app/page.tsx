import React from "react";
import { Badge } from "@/components/ui/badge";
import Profile from "../components/ui/profile";
import  Work  from "../components/work";
import Layout from "../components/article"
export default function Home() {
  return (
    <Layout title="Home">
      <div className=" items-center w-full justify-center flex  flex-col gap-6 ">
        <Badge className=" p-3 mt-4 text-shadow-md border-2 border-gray-300/30 w-120 ">
          Hello, I&apos;m an indie app developer based in Turkiye!
      </Badge>
      <Profile></Profile>
      <Work></Work>

    </div></Layout>
  )
}