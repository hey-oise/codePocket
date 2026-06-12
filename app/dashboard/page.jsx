"use client";
import { useState } from "react";
import Loading from "../loading";
import user from "../user";
import { redirect } from "next/navigation";
import SideBar from "../components/sideBar";

export default function Dashboard() {
  const [isDashLoading, setDashLoading] = useState(false);

  if (!user()) {
    redirect("/");
  }
  return (
    <div className="bg-gray-900 min-h-screen pl-60">
      <SideBar currentRoute={"dashboard"} />
      {isDashLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
            dashboard
          </h1>
          <div>
            <div className="flex flex-col gap-10 ml-10 mt-20 w-fit">
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
          </div>
        </>
      )}
    </div>
  );
}
