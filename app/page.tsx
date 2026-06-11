import { UserAvatar } from "@stackframe/stack";
import Link from "next/link";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5 text-center px-3">
      <h1 className="text-4xl text-blue-400">
        Save, Organize, and Reuse Your Code Snippets
      </h1>
      <h2 className="text-1xl max-w-3xl text-center text-blue-200 px-2">
        Stop searching through old projects, Slack messages, and Notes app. Keep
        your favorite snippets in one place. Copy them back instantly when you
        need them.
      </h2>
      <div className="flex flex-row gap-2">
        <Link
          className="border border-gray-600 p-2 rounded-lg bg-blue-800 hover:bg-blue-900 transition-all cursor-pointer"
          href={"/signup"}
        >
          Get started
        </Link>

        <a
          className="border border-gray-400 p-2 rounded-lg  hover:bg-blue-800 hover:text-black transition-all cursor-pointer"
          href={" https://buymeacoffee.com/oisegiwaokn"}
          target="_blank"
        >
          Buy me a coffee ☕
        </a>
        <UserAvatar />
      </div>
    </div>
  );
}
