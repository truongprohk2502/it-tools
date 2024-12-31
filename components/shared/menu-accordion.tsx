import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export interface MenuItemType {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface Props {
  title: string;
  items: MenuItemType[];
}

const MenuAccordion: React.FC<Props> = ({ title, items }) => {
  return (
    <Accordion type="multiple" className="px-2">
      <AccordionItem value={title}>
        <AccordionTrigger className="text-neutral-500 dark:text-neutral-400">
          {title}
        </AccordionTrigger>
        <AccordionContent className="ml-2 border-l border-neutral-300 pl-1">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="flex cursor-pointer items-center rounded-md py-2 pl-2 text-sm text-gray-700 hover:bg-blue-200 dark:text-gray-300 dark:hover:bg-neutral-600">
                <div>{item.icon}</div>
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
