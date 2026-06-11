"use client";

import Link from "next/link";
function Links({ href, text, isActive = false }) {
  if (isActive) {
    return (
      <Link
        className="capitalize bg-gray-600 text-pink-100 w-full p-1 rounded-md pl-2"
        href={href}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        className="capitalize bg-gray-800 transition-100 hover:bg-gray-700 text-pink-100 w-full p-1 rounded-md pl-2"
        href={href}
      >
        {text}
      </Link>
    );
  }
}
export default function SideBar({ currentRoute }) {
  return (
    <div className="flex flex-col gap-10 pt-8 bg-gray-900 w-50 p-2 rounded-lg fixed left-1 top-1 bottom-1 text-white max-h-screen">
      <p className="capitalize font-bold text-2xl text-gray-400">codePocket</p>
      <div className="flex flex-col gap-4 capitalise">
        {currentRoute === "dashboard" ? (
          <Links href={"dashboard"} text={"dashboard"} isActive={true} />
        ) : (
          <Links href={"dashboard"} text={"dashboard"} isActive={false} />
        )}
        {currentRoute === "mypocket" ? (
          <Links href={"mypocket"} text={"my pocket"} isActive={true} />
        ) : (
          <Links href={"mypocket"} text={"my pocket"} isActive={false} />
        )}
        {currentRoute === "playground" ? (
          <Links href={"playground"} text={"playground"} isActive={true} />
        ) : (
          <Links href={"playground"} text={"playground"} isActive={false} />
        )}
        {currentRoute === "library" ? (
          <Links href={"library"} text={"library"} isActive={true} />
        ) : (
          <Links href={"library"} text={"library"} isActive={false} />
        )}
      </div>
    </div>
  );
}
