"use client";
import React from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Work() {
  return (
<div className="flex flex-col  w-120 items-center justify-center mt-6 mb-6 ">
<div className="flex flex-col  w-120 px-8 sm:px-6 text-justify md:px-2 area ">
      <h5 className="font-bold underline text-lg">
        Work
      </h5>
    <p>
Yunus is a freelance and full-stack developer based in Gebze. He is currently studying Computer Engineering at Sakarya University Of Applied Sciences. Passionate about technology and continuous learning, Yunus develops modern web and mobile applications, focusing on clean design and efficient performance. He enjoys exploring new frameworks and staying up to date with the latest trends in software development. Outside of coding, he loves listening to music, reading books, and taking long walks, finding balance between creativity and productivity.  </p>
    </div>
    <div className="flex flex-col gap-2 w-120 px-8  text-justify md:px-2 mt-4 ">
      <h5 className="font-bold underline text-lg ">
        Bio
      </h5>
    
      <ul className="flex flex-col gap-1 text-left">
        <li>
          <strong>2007</strong>  Born in Istanbul, Turkey.
        </li>
        <li>
          <strong>2022</strong>  Worked at Logo Yazılım(Software).
        </li>
        <li>
          <strong className="font-extrabold">2024 to present</strong>  Studying at the Sakarya University Of Applied Sciences.
        </li>
      </ul>
    </div>
    <div className="flex flex-col gap-2 w-120 px-8   md:px-2 mt-4 ">
      <h5 className="font-bold underline text-lg ">
        I&#9829; 
      </h5>
    <p>
       <b>Music</b>, Reading Books, <b>Pokemon</b>, Vuejs.
    </p>      
    </div>
        <div className="flex flex-col gap-2 w-120 px-8  text-justify md:px-2 mt-4 ">
      <h5 className="font-bold underline text-lg ">
On the web

      </h5>
      <div className="flex flex-col justify-self-center   ">
            <div className="contactItem flex gap-2 items-center" ><a href="https://github.com/RounenRais" className="hover:bg-blue-300/60 p-3" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 15 }} /> <span>@RounenRais</span></a></div>
            <div className="contactItem flex gap-2 items-center" ><a href="https://www.linkedin.com/in/yunus-aksu-0a8176327/" className="hover:bg-blue-300/60 p-3" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 15 }} /> <span>@yunus-aksu</span></a></div>
            <div className="contactItem flex gap-2 items-center" ><a href="https://www.instagram.com/yunus_aksu1/" className="hover:bg-blue-300/60 p-3" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ fontSize: 15 }} /> <span>@yunus_aksu1</span></a></div>
        </div>
     
    </div>
    </div>
  )
}