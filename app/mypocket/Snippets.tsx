'use client'
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

export default function Snippets({ data }) {
  const [searchParam, setSearchParam] = useState('');
  const filteredData = data.filter(data => data?.title.toLowerCase().includes(searchParam) || data?.description?.toLowerCase().includes(searchParam) || data?.content.toLowerCase().includes(searchParam) || data?.language.toLowerCase().includes(searchParam));

  return (
    <div className="m-auto w-fit mt-60 flex flex-col gap-30">
      <div className="m-auto w-fit flex gap-3">
        <input onChange={function (e) {
          setSearchParam(e.target.value)
        }} className="w-60 md:w-150 h-10 px-2 border-gray-600 border rounded-lg outline-none" type='text' placeholder='Search name, content, language...' />
        <Link className="flex gap-1 h-10 items-center bg-blue-700 rounded-lg text-center px-3 justify-center" href={'/mypocket/new'}>New snippet<PlusCircle size={'16'}/></Link>
      </div>
      <div className='m-auto flex-col gap-3'>
      {filteredData.map((data, key) => {
        return <div key={key} title={data.description}>{data.title} </div>
      })}
        </div>
    </div>
  )
}
