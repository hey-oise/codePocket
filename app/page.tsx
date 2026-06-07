import Link from "next/link";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5 text-center">
      <h1 className="text-2xl text-blue-400"> Save, Organize, and Reuse Your Code Snippets </h1>
      <h1 className="text-1xl text-center w-md text-blue-200">Stop searching through old projects, Slack messages, and Notes app. Keep your favorite snippets in one place. Copy them back instantly when you need them.</h1>
      <div className="flex flex-row gap-2">
        <Link className="border border-gray-600 p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer" href={'/signup'}>Get started</Link>
       
        <Link className="border border-gray-600 p-2 rounded-md  hover:bg-gray-400 hover:text-black transition-all cursor-pointer" href={' https://buymeacoffee.com/oisegiwaokn'}>Buy me a coffee</Link>
      </div>
    </div>
  )
}