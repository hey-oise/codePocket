'use client'
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import SnippetSingle from "./singleSnippet";

interface Snippet {
  id: number;
  title: string;
  description: string | null;
  content: string;
  authorId: string;
  language: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function Snippets({ data } : {data:Snippet[]}) {
  const [searchParam, setSearchParam] = useState('');
  const filteredData = data.filter(data => data?.title.toLowerCase().includes(searchParam) || data?.description?.toLowerCase().includes(searchParam) || data?.content.toLowerCase().includes(searchParam) || data?.language.toLowerCase().includes(searchParam));

  return (
    <div className="m-auto w-fit mt-60 flex flex-col gap-30">
      <div className="m-auto w-fit flex gap-3 flex-wrap p-2">
        <input onChange={function (e) {
          setSearchParam(e.target.value)
        }} className="w-full md:w-150 h-10 px-2 border-gray-600 border rounded-lg outline-none" type='text' placeholder='Search name, content, language...' />
        <Link className="flex gap-1 h-10 items-center bg-gray-700 transition-delay-150 hover:outline hover:outline-blue-800 rounded-lg text-center px-3 justify-center" href={'/mypocket/new'}>New snippet<PlusCircle size={'16'}/></Link>
      </div>
      <div className='m-auto flex-col gap-3'>
      {filteredData.map((data, key) => {
        return <div key={key}><SnippetSingle data={data} /></div>
      })}
        </div>
    </div>
  )
}
