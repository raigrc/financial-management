"use client";

import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const handleClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full space-x-3">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          handleClick("google");
        }}
      >
        <FaGoogle />
      </Button>

      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => {
          handleClick("github");
        }}
      >
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;
