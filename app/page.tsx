import { Button } from "@/components/ui/button";
import Image from "next/image";
import LandingImage from "@/public/landing-finance.svg";
import { LoginButton } from "@/components/login-button";

export default function Home() {
  return (
    <div className="h-full flex flex-row items-center max-w-screen-lg mx-auto justify-between">
      {/* left side | TEXT */}
      <div className="w-1/2 space-y-3">
        <h1 className="text-6xl font-semibold drop-shadow-md">
          Financial Management System
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <LoginButton>
          <Button className="my-6" size="lg">
            Get Started
          </Button>
        </LoginButton>
      </div>

      {/* right side | IMAGE */}
      <div className="w-1/2">
        <Image src={LandingImage} width={500} height={500} alt={""}></Image>
      </div>
    </div>
  );
}
