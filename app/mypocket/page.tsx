"use client";
import { useState } from "react";
import Loading from "../loading";
import { user } from "../user";
import { redirect } from "next/navigation";
import SideBar from "../components/sideBar";

if (!user) {
  redirect("/");
}
export default function Snippets() {
  const [isPocketLoading, setPocketLoading] = useState(true);
  return (
    <div className="bg-gray-900 min-h-screen pl-60">
      <SideBar currentRoute={"mypocket"} />
      <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
        snippets
      </h1>
      {isPocketLoading ? (
        <Loading />
      ) : (
        <>
          <div></div>
        </>
      )}
    </div>
  );
}
