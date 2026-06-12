import { SignIn } from "@stackframe/stack";
import Back from "../components/back";

export default function LogIn() {
  return (
    <div>
      <Back />
      <div className="h-screen flex justify-center items-center w-full p-10 m-auto">
        <SignIn />
      </div>
    </div>
  );
}
