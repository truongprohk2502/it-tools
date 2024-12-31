"use client";

import BuyCoffeeIcon from "@/assets/icons/buy-coffee.icon";
import TooltipButton from "@/components/shared/tooltip-button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import useDomLoaded from "@/hooks/useDomLoaded";
import {
  GithubIcon,
  HouseIcon,
  InfoIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import SearchDialog from "./search-dialog";

interface Props {
  isOpenMenu: boolean;
  onToggleMenu: () => void;
}

const Header: React.FC<Props> = ({ isOpenMenu, onToggleMenu }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const { theme, setTheme } = useTheme();
  const domLoaded = useDomLoaded();
  const router = useRouter();

  useEffect(() => {
    const wrapperElement = wrapperRef.current!;

    const handleScroll = () => {
      const isScrolledToTop = window.scrollY === 0;
      if (isScrolledToTop) {
        wrapperElement.style.boxShadow = "none";
      } else {
        wrapperElement.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSearchDialog = () => {
    searchButtonRef.current?.click();
  };

  const goToHome = () => {
    router.push("/");
  };

  const goToAbout = () => {
    router.push("/about");
  };

  const goToGithubRepo = () => {
    window.open("https://github.com/truongprohk2502/it-tools", "_blank");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="bg-main-light dark:bg-main-dark sticky top-0 z-10 flex items-center gap-4 px-4 py-3 shadow-md transition-all duration-150"
      >
        <TooltipButton
          onClick={onToggleMenu}
          tooltip={isOpenMenu ? "Close menu" : "Open menu"}
        >
          <MenuIcon className="h-6 w-6" />
        </TooltipButton>
        <TooltipButton onClick={goToHome} tooltip="Home">
          <HouseIcon className="h-6 w-6" />
        </TooltipButton>
        <div
          className="flex flex-auto cursor-text items-center rounded-md bg-neutral-200 px-4 py-2 text-neutral-400 dark:bg-neutral-700"
          onClick={openSearchDialog}
        >
          <SearchIcon className="h-4 w-4" />
          <p className="mx-2 text-sm">Search</p>
          <div className="rounded-md border border-neutral-300 px-1.5 py-0.5 text-xs dark:border-neutral-500">
            Ctrl + K
          </div>
        </div>
        <TooltipButton onClick={goToAbout} tooltip="About Us">
          <InfoIcon className="h-6 w-6" />
        </TooltipButton>
        <TooltipButton onClick={goToGithubRepo} tooltip="Github Repo">
          <GithubIcon className="h-6 w-6" />
        </TooltipButton>
        <TooltipButton
          tooltip={theme === "light" ? "Dark mode" : "Light mode"}
          onClick={toggleTheme}
        >
          {domLoaded &&
            (theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            ))}
        </TooltipButton>
        <Link href="https://buymeacoffee.com/truongnguyen98" target="_blank">
          <BuyCoffeeIcon className="h-8 w-28" />
        </Link>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <button ref={searchButtonRef} className="hidden" />
        </DialogTrigger>
        <SearchDialog onOpenDialog={openSearchDialog} />
      </Dialog>
    </>
  );
};

export default Header;
