"use client";

import { FaGoogle, FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <div className="flex items-center w-full space-x-3">
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaGoogle />
      </Button>

      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;
