import { LucideCircleArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Back() {
  return (
    <Link
      className="fixed top-3 left-3 text-gray-500 hover:underline flex gap-1"
      href={"/"}
    >
      <LucideCircleArrowLeft />
      Go home
    </Link>
  );
}
