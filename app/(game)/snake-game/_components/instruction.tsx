import { DIRECTION_ICONS, DIRECTION_KEYS } from "../constants";

const Instruction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center rounded-md bg-neutral-300 py-2 dark:bg-neutral-700">
      <p className="text-center text-sm">Use arrow keys to move</p>
      <div className="mt-2 flex justify-center gap-2">
        {DIRECTION_ICONS.map((Icon, index) => (
          <div
            key={index}
            className="flex h-5 w-5 items-center justify-center rounded-sm bg-blue-500 text-white"
          >
            <Icon width={16} height={16} />
          </div>
        ))}
      </div>
      <p className="text-center text-sm">or</p>
      <div className="mt-1 flex justify-center gap-2">
        {DIRECTION_KEYS.map((key) => (
          <div
            key={key}
            className="flex h-5 w-5 items-center justify-center rounded-sm bg-blue-500 text-white"
          >
            <span className="text-sm">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instruction;
