
import Link from "next/link";
import SideBar from "../components/sideBar";
import { authHandle } from "../authHandle";
import { getSnippets } from "./getSnippets";
import Snippets from "./Snippets";

export default async function MyPocket() {
  authHandle();
  const snippets = await getSnippets();
    //   {
    //     id: 1,
    //     title: "Debounce Function",
    //     description: "A simple JavaScript debounce implementation.",
    //     content: `function debounce(func, timeout = 300) {
    //   let timer;
    //   return (...args) => {
    //     clearTimeout(timer);
    //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //   };
    // }`,
    //     authorId: "usr_001",
    //     language: "javascript",
    //     isPublic: true,
    //     createdAt: new Date("2026-06-01T10:00:00Z"),
    //     updatedAt: new Date("2026-06-01T10:00:00Z"),
    //   },
    //   {
    //     id: 2,
    //     title: "SQL Safe Migration",
    //     description: "Boilerplate for adding a column with a default value safely.",
    //     content: 'ALTER TABLE "User" ADD COLUMN "role" TEXT NOT NULL DEFAULT \'USER\';',
    //     authorId: "usr_002",
    //     language: "sql",
    //     isPublic: false,
    //     createdAt: new Date("2026-06-02T14:30:00Z"),
    //     updatedAt: new Date("2026-06-02T14:30:00Z"),
    //   },
    //   {
    //     id: 3,
    //     title: "Center a Div",
    //     description: "The modern CSS way to center elements.",
    //     content: `.container {
    //   display: grid;
    //   place-items: center;
    // }`,
    //     authorId: "usr_001",
    //     language: "css",
    //     isPublic: true,
    //     createdAt: new Date("2026-06-03T09:15:00Z"),
    //     updatedAt: new Date("2026-06-03T09:15:00Z"),
    //   },
    //   {
    //     id: 4,
    //     title: "Python List Comprehension",
    //     description: null,
    //     content: "squares = [x**2 for x in range(10) if x % 2 == 0]",
    //     authorId: "usr_003",
    //     language: "python",
    //     isPublic: true,
    //     createdAt: new Date("2026-06-04T16:20:00Z"),
    //     updatedAt: new Date("2026-06-04T16:20:00Z"),
    //   },
    //   {
    //     id: 5,
    //     title: "Rust Hello World",
    //     description: "Standard entry point for a Rust binary application.",
    //     content: 'fn main() {\n    println!("Hello, world!");\n}',
    //     authorId: "usr_002",
    //     language: "rust",
    //     isPublic: false,
    //     createdAt: new Date("2026-06-05T11:45:00Z"),
    //     updatedAt: new Date("2026-06-05T11:45:00Z"),
    //   },
    //   {
    //     id: 6,
    //     title: "useEffect Hook",
    //     description: "React useEffect with cleanup and dependency array.",
    //     content: `useEffect(() => {
    //   const subscription = api.subscribe();
    //   return () => subscription.unsubscribe();
    // }, [dependencies]);`,
    //     authorId: "usr_001",
    //     language: "javascript",
    //     isPublic: true,
    //     createdAt: new Date("2026-06-06T08:00:00Z"),
    //     updatedAt: new Date("2026-06-06T08:00:00Z"),
    //   },
    //   {
    //     id: 7,
    //     title: "Go HTTP Server",
    //     description: "Minimal HTTP server in Go.",
    //     content: `package main
    
    // import "net/http"
    
    // func main() {
    //   http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    //     w.Write([]byte("Hello"))
    //   })
    //   http.ListenAndServe(":8080", nil)
    // }`,
    //     authorId: "usr_003",
    //     language: "go",
    //     isPublic: false,
    //     createdAt: new Date("2026-06-07T13:10:00Z"),
    //     updatedAt: new Date("2026-06-07T13:10:00Z"),
    //   },
    //   {
    //     id: 8,
    //     title: "CSS Grid Layout",
    //     description: "Three-column responsive grid with gap.",
    //     content: `.grid {
    //   display: grid;
    //   grid-template-columns: repeat(3, 1fr);
    //   gap: 1rem;
    // }`,
    //     authorId: "usr_001",
    //     language: "css",
    //     isPublic: true,
    //     createdAt: new Date("2026-06-08T07:30:00Z"),
    //     updatedAt: new Date("2026-06-08T07:30:00Z"),
    //   },
    //   {
    //     id: 9,
    //     title: "Python Flask Route",
    //     description: undifined,
    //     content: `@app.route('/api/hello')
    // def hello():
    //     return {'message': 'Hello, World!'}`,
    //     authorId: "usr_003",
    //     language: "python",
    //     isPublic: true,
    //     createdAt: new Date("2026-06-09T18:55:00Z"),
    //     updatedAt: new Date("2026-06-09T18:55:00Z"),
    //   },
    //   {
    //     id: 10,
    //     title: "Rust Error Handling",
    //     description: "Using Result and Option in Rust.",
    //     content: `fn read_file(path: &str) -> Result<String, io::Error> {
    //   fs::read_to_string(path)
    // }`,
    //     authorId: "usr_002",
    //     language: "rust",
    //     isPublic: false,
    //     createdAt: new Date("2026-06-10T12:00:00Z"),
    //     updatedAt: new Date("2026-06-10T12:00:00Z"),
    //   },
    // ];
  return (
    <div className="bg-gray-900 min-h-screen pl-0 justify-center align-middle md:pl-60">
      
      <h1 className="capitalize text-2xl font-semibold text-pink-50 m-auto w-fit mt-10">
        snippets
      </h1>
      <SideBar currentRoute={"mypocket"} />
      <Snippets data={snippets ?? []}/>
    </div>
  );
}
