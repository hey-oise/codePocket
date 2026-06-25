import { stackClientApp } from "@/stack/client";
import { prisma } from "../../prisma";

export async function createSnippet(
  title = "untitled snippets",
  description = "",
  content = "",
  language = "text",
  isPublic = false,
) {
  const user = await stackClientApp.getUser();
  if (user)
    await prisma.snippets.create({
      data: {
        title: title,
        description: description,
        content: content,
        authorId: user.id,
        language: language,
        isPublic: isPublic,
      },
    });
}
