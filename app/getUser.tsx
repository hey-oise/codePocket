import { prisma } from "./prisma";
import { stackClientApp } from "@/stack/client";

export async function getUser() {
  const user = stackClientApp.getUser();
  
  return await prisma.user.findUnique({
    where: {
      id: user.id,
    }
  })
}