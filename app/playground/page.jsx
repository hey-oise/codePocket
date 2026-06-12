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
  const [isPlaygroundLoading, setPlaygroundLoading] = useState(true);
  return (
    <div className="bg-gray-900 min-h-screen pl-60">
      <SideBar currentRoute={"playground"} />
      <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
        playground
      </h1>
      {isPlaygroundLoading ? (
        <Loading />
      ) : (
        <>
          <div></div>
        </>
      )}
    </div>
  );
}
