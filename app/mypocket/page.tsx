import Link from "next/link";
import SideBar from "../components/sideBar";

export default function MyPocket() {
  return (
    <div className="bg-gray-900 min-h-screen pl-0 justify-center align-middle md:pl-60">
      <SideBar currentRoute={'mypocket'} />
      <Link href={'/mypocket/new'}>new</Link>
    </div>
  )
}