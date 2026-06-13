"use client";
import { useState } from "react";
import Loading from "../loading";
import user from "../user";
import { redirect } from "next/navigation";
import SideBar from "../components/sideBar";
import { Menu } from "lucide-react";

export default function Dashboard() {
  const [isDashLoading, setDashLoading] = useState(false);

  if (!user()) {
    redirect("/");
  }
  return (
    <div className="bg-gray-900 min-h-screen pl-0 justify-center align-middle md:pl-60">
      <SideBar currentRoute={"dashboard"} />
      {isDashLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
            dashboard
          </h1>
          <div className="flex flex-wrap justify-between gap-20 lg:gap-100 m-auto mlw-10 mt-20">
            <div className="flex flex-col w-fit gap-10 m-auto">
              <p className="text-gray-400 font-bold capitalize text-2xl">
                stats
              </p>
              <div className="flex flex-row gap-15">
                <p className="text-center text-blue-400 capitalize font-semibold">
                  24 <br /> snippets
                </p>
                <p className="text-center text-green-200 capitalize font-semibold">
                  12 <br /> playgrounds
                </p>
              </div>
            </div>
            <div className="min-w-60 min-h-20 md:mr-auto text-center m-auto">
              <p className="text-gray-300 font-bold capitalize text-2xl">
                top languages
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
