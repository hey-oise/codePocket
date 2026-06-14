"use client";

import { UserAvatar, UserButton } from "@stackframe/stack";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import { Clipboard, Code, Code2, Home, Library } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
function Links({ href, text, isActive = false, icon }) {
  if (isActive) {
    return (
      <Link
        className="capitalize bg-gray-700 text-pink-100 w-full p-1 rounded-md pl-2 flex gap-2"
        href={href}
      >
        {icon}
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        className="flex gap-2 capitalize bg-gray-900 transition-100 hover:bg-gray-800 text-pink-100 w-full p-1 rounded-md pl-2"
        href={href}
      >
        {icon}
        {text}
      </Link>
    );
  }
}
export default function SideBar({ currentRoute }) {
  const [sideBar, setSideBar] = useState("hidden");
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
            {currentRoute === "dashboard" ? (
              <Links
                href={"dashboard"}
                text={"dashboard"}
                icon={<Home className="w-4" />}
                isActive={true}
              />
            ) : (
              <Links
                href={"dashboard"}
                text={"dashboard"}
                icon={<Home className="w-4" />}
                isActive={false}
              />
            )}
            {currentRoute === "mypocket" ? (
              <Links
                href={"mypocket"}
                text={"my pocket"}
                icon={<Clipboard className="w-4" />}
                isActive={true}
              />
            ) : (
              <Links
                href={"mypocket"}
                text={"my pocket"}
                icon={<Clipboard className="w-4" />}
                isActive={false}
              />
            )}
            {currentRoute === "playground" ? (
              <Links
                href={"playground"}
                text={"playground"}
                icon={<Code className="w-4" />}
                isActive={true}
              />
            ) : (
              <Links
                href={"playground"}
                text={"playground"}
                icon={<Code className="w-4" />}
                isActive={false}
              />
            )}
            {currentRoute === "library" ? (
              <Links
                href={"library"}
                text={"library"}
                icon={<Library className="w-4" />}
                isActive={true}
              />
            ) : (
              <Links
                href={"library"}
                text={"library"}
                icon={<Library className="w-4" />}
                isActive={false}
              />
            )}
          </div>
        </div>
        <UserButton showUserInfo />
      </div>
    </>
  );
}
