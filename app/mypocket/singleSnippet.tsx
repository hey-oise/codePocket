"use client";
import {
  ChevronDown,
  ChevronUp,
  Clipboard,
  LucideClipboardCheck,
} from "lucide-react";
import { useState } from "react";

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

export default function SnippetSingle({ data }: { data: Snippet }) {
  const [isDropped, setIsDropped] = useState(data.title);
  const [isCopied, setIsCopied] = useState(false);
  function toggleDropped() {
    if (isDropped == data.title) {
      setIsDropped(`hello${data.id}`);
    } else {
      setIsDropped(data.title);
    }
  }
  return (
    <div className="flex flex-col border-b border-b-gray-400 w-80 md:w-200 mb-5 p-1 gap-2">
      <div onClick={toggleDropped} className="flex justify-between capitalize">
        <p className="font-semibold">{data?.title}</p>{" "}
        <div className="flex flex-row gap-2">
          <span className="font-bold">{data?.language}</span>{" "}
          <button>
            {isDropped == data?.title ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>
      </div>
      <div>
        {isDropped == `hello${data.id}` ? (
          <div>
            <p className="mt-3 text-2xl">{data?.description}</p>
            <div className="flex bg-gray-950 p-5 rounded-lg mt-10 mb-5 justify-between">
              <pre className="max-w-200 text-wrap">{data?.content}</pre>
              {isCopied == true ? (
                <button className="flex bg-green-900 p-2 rounded-md items-center h-fit">
                  Copied! <LucideClipboardCheck size={17} />
                </button>
              ) : (
                <button
                  className="flex bg-gray-900 p-2 rounded-md items-center h-fit"
                  onClick={() => {
                    navigator.clipboard.writeText(data?.content);
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 3000);
                  }}
                  title="copy to clipboard"
                >
                  Copy <Clipboard size={17} />
                </button>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
