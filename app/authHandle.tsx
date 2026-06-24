import { stackClientApp } from "@/stack/client";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

export async function authHandle() {
  const user = await stackClientApp.getUser();
  if (!user || !user.id) {
    redirect("/");
  }
  await prisma.user.upsert({
    where: { id: user.id },
    update: {
      email: user.primaryEmail ?? '',
      name: user.displayName,
    },
    create: {
      id: user.id,
      email: user.primaryEmail ?? '',
      name: user.displayName,
    },
  });
}
