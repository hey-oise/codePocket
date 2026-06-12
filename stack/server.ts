import { StackServerApp } from "@stackframe/stack";
import { stackClientApp } from "./client";

export const stackServerApp = new StackServerApp({
  inheritsFrom: stackClientApp,
  urls: {
    signIn: "/login",
    signUp: "/signup",
    accountSettings: "/accountsettings",
    afterSignIn: "/",
    afterSignUp: "/",
  },
});
