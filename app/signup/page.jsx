import { SignUp } from "@stackframe/stack";
import Back from "../components/back";

export default function GetStarted() {
  return (
    <div>
      <Back />
      <div className="h-screen flex justify-center items-center w-full p-10 m-auto text-white">
        <SignUp />
      </div>
    </div>
  );
}
