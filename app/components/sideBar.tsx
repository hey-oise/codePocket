"use client";

import { UserButton } from "@stackframe/stack";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import { Clipboard, Code, Code2, Home, Library } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SideBar({ currentRoute = 'dashboard'} ) {
  const [sideBar, setSideBar] = useState("hidden");
  const links = [
    {
      href: "dashboard",
      text: "dashboard",
      icon: <Home className="w-4" />,
    },
    {
      href: "mypocket",
      text: "my pocket",
      icon: <Clipboard className="w-4" />,
    },
    {
      href: "playground",
      text: "playground",
      icon: <Code className="w-4" />,
    },
    {
      href: "library",
      text: "library",
      icon: <Library className="w-4" />,
    },
  ];
  return (
    <>
      <button
        className="fixed right-2 top-3 cursor-pointer z-24 md:hidden"
        onClick={function () {
          if (sideBar == "hidden") {
            setSideBar("flex");
          } else {
            setSideBar("hidden");
          }
        }}
      >
        {sideBar == "hidden" ? <MenuIcon size={30} /> : <X size={30} />}
      </button>
      {sideBar == "hidden" ? (
        <></>
      ) : (
        <div
          onClick={function () {
            if (sideBar == "hidden") {
              setSideBar("flex");
            } else {
              setSideBar("hidden");
            }
          }}
          className="fixed top-0 left-0 right-0 bottom-0  backdrop-blur-2xl"
        />
      )}
      <div
        className={`${sideBar} md:flex flex-col justify-between gap-10 py-8 bg-gray-950 w-50 p-2 rounded-lg fixed left-1 top-1 bottom-1 text-white max-h-screen z-24`}
      >
        <div className="flex flex-col gap-10">
          <p className="capitalize font-bold text-1xl text-gray-400 flex flex-row gap-2 items-center pl-2">
            <Code2 size={25} />
            code Pocket
          </p>
          <div className="flex flex-col gap-4 capitalise">
            {links.map(function (link, key) {
              const active = link.href == currentRoute;
              return (
                <Link
                  key={key}
                  className={`capitalize text-pink-100 w-full p-1 rounded-md pl-2 flex gap-2 ${active ? " bg-gray-700 font-semibold" : " bg-gray-900"}`}
                  href={link.href}
                >
                  {link.icon}
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
        <UserButton showUserInfo />
      </div>
    </>
  );
}
