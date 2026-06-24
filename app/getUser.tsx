import { prisma } from "./prisma";
import { stackClientApp } from "@/stack/client";

export async function getUser() {
  const user = await stackClientApp.getUser();
  if (!user) {
    return null
  }
  return await prisma.user.findUnique({
    where: {
      id: user?.id,
    }, include: {
      snippets: true,
      playground: true,
    }
  })
}