import { HeartIcon } from "lucide-react";

const FavoriteCard: React.FC = () => {
  return (
    <div
      className="h-[10.5rem] rounded-md px-4 pb-6 pt-4 text-white"
      style={{
        background:
          "linear-gradient(45deg, rgba(50,64,255,1) 0%, rgba(96,184,245,1) 100%)",
      }}
    >
      <HeartIcon className="h-10 w-10" />
      <h2 className="mt-4 text-lg font-medium">You like it-tools?</h2>
      <p className="line-clamp-2 text-sm">
        Give us a star on{" "}
        <a
          href="https://github.com/truongprohk2502/it-tools"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
        . Thank you!
      </p>
    </div>
  );
};

export default FavoriteCard;
