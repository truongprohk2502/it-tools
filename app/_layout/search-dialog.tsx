import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { toolGroups } from "@/constants/tools";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface Props {
  onOpenDialog: () => void;
}

const SearchDialog: React.FC<Props> = ({ onOpenDialog }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        onOpenDialog();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectItem = (href: string) => {
    closeButtonRef.current?.click();
    router.push(href);
  };

  return (
    <DialogContent className="p-0 sm:w-[40rem] sm:min-w-[40rem] sm:max-w-[40rem]">
      <DialogClose asChild>
        <button ref={closeButtonRef} className="hidden" />
      </DialogClose>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogDescription className="hidden"></DialogDescription>
      <Command className="h-full w-full">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {toolGroups.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => selectItem(item.href)}
                >
                  <div className="flex items-center">
                    <div className="ml-1 w-10">
                      <item.icon className="!h-6 !w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-xs text-neutral-400">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </DialogContent>
  );
};

export default SearchDialog;
