import Link from "next/link";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5 text-center">
      <h1 className="text-2xl text-blue-400">
        {" "}
        Save, Organize, and Reuse Your Code Snippets{" "}
      </h1>
      <h2 className="text-1xl max-w-2xl text-center text-blue-200">
        Stop searching through old projects, Slack messages, and Notes app. Keep
        your favorite snippets in one place. Copy them back instantly when you
        need them.
      </h2>
      <div className="flex flex-row gap-2">
        <Link
          className="border border-gray-600 p-2 rounded-md bg-blue-800 hover:bg-blue-900 transition-all cursor-pointer"
          href={"/signup"}
        >
          Get started
        </Link>

        <Link
          className="border border-blue-600 p-2 rounded-md  hover:bg-blue-600 hover:text-black transition-all cursor-pointer"
          href={" https://buymeacoffee.com/oisegiwaokn"}
        >
          Buy me a coffee
        </Link>
      </div>
    </div>
  );
}
