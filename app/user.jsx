"use client";
import { useUser } from "@stackframe/stack";

export default function user() {
  const userIsSignedIn = useUser();

  // This evaluates strictly to the boolean true or false
  return !!userIsSignedIn;
}
