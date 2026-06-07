import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function LogIn() {
  return (
    <div>
      <Link className='fixed top-5 left-5 text-blue-400 hover:underline' href={'/'}>Go back home</Link>
      <Link className='fixed top-5 right-5 text-blue-400 hover:underline' href={'/signup'}>sign up</Link>
    <div className="h-screen flex justify-center items-center">
      <SignIn/>
      </div>
    </div>
  )
}