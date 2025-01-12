import logoBackground from "@/assets/svg/wave.svg";
import MenuAccordion from "@/components/shared/menu-accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toolGroups } from "@/constants/tools";
import Image from "next/image";
import Link from "next/link";

export default function LeftMenu() {
  return (
    <div className="h-full w-full">
      <ScrollArea className="h-full w-full pb-6">
        <div className="sticky top-0 aspect-[32/15] w-full">
          <Image
            priority
            src={logoBackground}
            alt="IT Tools"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-neutral-100">
            <Link href="/">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">IT Tools</h1>
                <p>Handy tools for developer</p>
              </div>
            </Link>
          </div>
        </div>
        {toolGroups.map((item, index) => (
          <MenuAccordion key={index} {...item} />
        ))}
      </ScrollArea>
    </div>
  );
}
