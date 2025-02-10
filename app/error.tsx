"use client";

import robotAnimation from "@/assets/lotties/robot.json";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function ErrorPage() {
  const navigate = useRouter();

  const goHome = () => navigate.push("/");

  return (
    <div className="-mx-6 -my-8 flex h-[calc(100vh-4rem)] min-h-[35rem] flex-col items-center justify-center py-48">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: robotAnimation,
        }}
        height={300}
        width={300}
      />
      <p className="mt-4 text-3xl font-semibold">Internal Server Error</p>
      <p className="mt-2">Something went wrong.</p>
      <Button className="mb-16 mt-4" onClick={goHome}>
        Go home
      </Button>
    </div>
  );
}
