import { ArrowLeftIcon, Plus } from "lucide-react";
import { createSnippet } from "./addSnippets";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function NewSnippet() {
  return (
    <form
      className="m-auto text-pink-50 align-center flex flex-col p-20 justify-center gap-4 h-screen"
      action={async function (data) {
        "use server";

        const name = data.get("name") as string;
        const description = data.get("description") as string;
        const content = data.get("content") as string;
        const language = data.get("language") as string;
        const isPublic = data.get("visibility") === 'true' ? true : false;
        redirect("/mypocket");

        await createSnippet(name, description, content, language, isPublic);

        
      }}
    >
      <Link className="fixed top-4 left-4" title={"back"} href={"/mypocket"}>
        <ArrowLeftIcon />
      </Link>
      
      <input
        required
        name="name"
        type="text"
        placeholder="snippet name"
        className="border border-gray-600 w-md h-10 rounded-md p-2 outline-none"
      />

      <textarea
        name="description"
        placeholder="description"
        className="border border-gray-600 w-md max-h-15 min-h-20 rounded-md p-2 outline-none"
      />

      <textarea
        required
        name="content"
        placeholder="paste your code here..."
        className="border border-gray-600 w-md max-h-30 min-h-30 rounded-md p-2 outline-none font-mono"
      />

      <div className="flex justify-between gap-5 pb-10">
        <div className="flex gap-3 flex-col w-fit justify-center">
          <select name="language" id="language" defaultValue="html">
            <option value="angular">Angular</option>
            <option value="cpp">C++</option>
            <option value="css">CSS</option>
            <option value="go">Go</option>
            <option value="html">HTML</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="json">JSON</option>
            <option value="jsx">JSX</option>
            <option value="less">Less</option>
            <option value="liquid">Liquid</option>
            <option value="markdown">Markdown</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="rust">Rust</option>
            <option value="sass">Sass</option>
            <option value="sql">SQL</option>
            <option value="tsx">TSX</option>
            <option value="typescript">TypeScript</option>
            <option value="xml">XML</option>
            <option value="yaml">YAML</option>
          </select>
        </div>

        <div className="flex gap-3 flex-col w-fit justify-center">
          <select name="visibility" id="visibility" defaultValue="false">
            <option value="false">Private</option>
            <option value="true">Public</option>
          </select>
        </div>
      </div>

      <button
        className="bg-blue-700 hover:bg-blue-800 transition-delay-100 p-2 capitalize rounded-lg cursor-pointer flex justify-center gap-1"
        type="submit"
      >
        create snippet
        <Plus />
      </button>
    </form>
  );
}
