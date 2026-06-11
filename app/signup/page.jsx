import { SignUp } from "@stackframe/stack";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div>
      <Link
        className="fixed top-5 left-5 text-blue-400 hover:underline"
        href={"/"}
      >
        Go back home
      </Link>
      <Link
        className="fixed top-5 right-5 text-blue-400 hover:underline"
        href={"/login"}
      >
        Login
      </Link>
      <div className="h-screen flex justify-center items-center w-full p-10 m-auto text-white">
        <SignUp />
      </div>
    </div>
  );
}
