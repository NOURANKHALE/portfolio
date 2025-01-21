"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Linkedin, Github, Phone } from "lucide-react";

export function ContactMe() {
  const pinItems = [
    {
      title: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/nouran-khaled187/",
      label: "LinkedIn",
      Icon: <Linkedin className="text-4xl text-white" />,
    },
    {
      title: "GitHub Profile",
      href: "https://github.com/NOURANKHALE",
      label: "GitHub",
      Icon: <Github className="text-4xl text-white" />,
    },
    {
      title: "Phone Number",
      href: null,
      label: "01096300705",
      Icon: <Phone className="text-4xl text-white" />,
    },
  ];

  return (
    <div
      className="h-auto w-full flex flex-col items-center   bg-gray-900 py-20  "
      id="ContactMe"
    >
      <h1 className="text-4xl font-bold text-white mb-20">Contact Me</h1>
      <div className=" flex flex-wrap justify-center gap-8">
        {pinItems.map((item, index) => (
          <PinContainer
            key={index}
            title={item.title}
            href={item.href ?? undefined}
          >
            <div className="flex basis-full flex-col p-4   sm:basis-1/2 md:w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {item.Icon}
                {item.label}
              </h3>
              <div className="flex flex-1 w-64 rounded-lg mt-4 lg:w-80 md:w-80  bg-gradient-to-br from-gray-900 via-gray-600 to-gray-800 " />
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
