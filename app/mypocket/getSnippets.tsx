import { prisma } from "../prisma";
import { stackClientApp } from "@/stack/client";

export async function getSnippets() {
  const user = await stackClientApp.getUser();
  if (!user?.id) {
    return null
  } else {
    return await prisma.snippets.findMany({
      where: {
        authorId: user?.id,
      }
    })
  }
}