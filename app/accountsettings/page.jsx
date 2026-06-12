"use client";
import { AccountSettings } from "@stackframe/stack";
import user from "../user";
import { redirect } from "next/navigation";
import Back from "../components/back";

export default function accountSettings() {
  if (!user()) {
    redirect("/");
  }
  return (
    <div className="bg-gray-900 min-h-screen pl-5 pt-10">
      <Back />
      <AccountSettings fullPage />
    </div>
  );
}
