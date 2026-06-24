import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";

export default function Back() {
  return (
    <Link
      className="fixed top-3 left-3 text-gray-500 hover:text-gray-400 flex gap-1"
      href={"/"}
    >
      <ArrowBigLeftDash></ArrowBigLeftDash>
      Go home
    </Link>
  );
}
