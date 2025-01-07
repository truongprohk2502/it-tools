"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItemType {
  title: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface Props {
  title: string;
  items: MenuItemType[];
}

const MenuAccordion: React.FC<Props> = ({ title, items }) => {
  const pathname = usePathname();

  return (
    <Accordion type="multiple" className="px-2" defaultValue={[title]}>
      <AccordionItem value={title}>
        <AccordionTrigger className="text-neutral-500 dark:text-neutral-400">
          {title}
        </AccordionTrigger>
        <AccordionContent className="ml-2 grid grid-cols-1 gap-1 border-l border-neutral-300 pl-1">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <div
                className={cn(
                  "flex cursor-pointer items-center rounded-md py-2 pl-2 text-sm text-gray-700 hover:bg-blue-200 dark:text-gray-300 dark:hover:bg-neutral-600",
                  { "bg-blue-200 dark:bg-neutral-600": pathname === item.href },
                )}
              >
                <div>
                  <item.icon className="h-4 w-4" />
                </div>
                <p className="ml-2">{item.title}</p>
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MenuAccordion;
