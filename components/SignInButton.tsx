"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = { text: string };

/**
 * Button that allows the user to sign in with Google.
 * @param text (string): text to display on the button
 * @returns (JSX.Element): Sign In Button (Google)
 */
const SignInButton = ({ text }: Props) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
