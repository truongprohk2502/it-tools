import logoBackground from "@/assets/svg/wave.svg";
import MenuAccordion from "@/components/shared/menu-accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircuitBoardIcon } from "lucide-react";
import Image from "next/image";

const LeftMenu: React.FC = () => {
  return (
    <div className="sticky left-0 top-0 h-screen w-[20rem] shadow-md flex-shrink-0 dark:bg-neutral-700">
      <ScrollArea className="h-full w-full">
        <div className="sticky top-0 aspect-[32/15] w-full">
          <Image
            priority
            src={logoBackground}
            alt="IT Tools"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-neutral-100">
            <h1 className="text-3xl font-bold">IT Tools</h1>
            <p>Handy tools for developer</p>
          </div>
        </div>
        <MenuAccordion
          title="UI Components"
          items={[
            {
              icon: <CircuitBoardIcon className="h-5 w-5" />,
              href: "/components/button",
              title: "Button",
            },
            {
              icon: <CircuitBoardIcon className="h-5 w-5" />,
              href: "/components/input",
              title: "Input",
            },
          ]}
        />
      </ScrollArea>
    </div>
  );
};

export default LeftMenu;
