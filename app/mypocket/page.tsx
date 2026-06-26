
import Link from "next/link";
import SideBar from "../components/sideBar";
import { authHandle } from "../authHandle";
import { getSnippets } from "./getSnippets";
import Snippets from "./Snippets";

export default async function MyPocket() {
  authHandle();
  const snippets = [
    {
      title: "Debounce Function",
      description: "A simple JavaScript debounce implementation for search inputs.",
      content: "function debounce(func, timeout = 300){\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => { func.apply(this, args); }, timeout);\n  };\n}",
      authorId: "usr_cl01abcde0001",
      language: "javascript",
      isPublic: true,
    },
    {
      title: "SQL Safe Migration",
      description: "Boilerplate for adding a column with a default value safely.",
      content: "ALTER TABLE \"User\" ADD COLUMN \"role\" TEXT NOT NULL DEFAULT 'USER';",
      authorId: "usr_cl01abcde0002",
      language: "sql",
      isPublic: false,
    },
    {
      title: "Center a Div",
      description: "The modern CSS way to center elements.",
      content: ".container {\n  display: grid;\n  place-items: center;\n}",
      authorId: "usr_cl01abcde0001",
      language: "css",
      isPublic: true,
    },
    {
      title: "Python List Comprehension",
      description: null,
      content: "squares = [x**2 for x in range(10) if x % 2 == 0]",
      authorId: "usr_cl01abcde0003",
      language: "python",
      isPublic: true,
    },
    {
      title: "Rust Hello World",
      description: "Standard entry point for a Rust binary application.",
      content: "fn main() {\n    println!(\"Hello, world!\");\n}",
      authorId: "usr_cl01abcde0002",
      language: "rust",
      isPublic: false,
    }
  ];
    //await getSnippets();
  return (
    <div className="bg-gray-900 min-h-screen pl-0 justify-center align-middle md:pl-60">
      
      <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
        snippets
      </h1>
      <SideBar currentRoute={"mypocket"} />
      <Snippets data={snippets}/>
    </div>
  );
}
