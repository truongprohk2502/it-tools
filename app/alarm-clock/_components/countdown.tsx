import { useCallback } from "react";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<Props> = ({ hours, minutes, seconds }) => {
  const renderText = useCallback((num?: number) => {
    const result = num !== undefined ? String(num).padStart(2, "0") : ":";
    return (
      <div className="relative inline-block font-['Digital-7']">
        <p className="absolute m-0 w-full text-[#d8d6d6] dark:text-[#242a32]">
          {num !== undefined ? 88 : ":"}
        </p>
        <p className="relative m-0 text-[#242a32] dark:text-[#ebebeb]">
          {result}
        </p>
      </div>
    );
  }, []);

  return (
    <div className="text-[7rem]">
      {renderText(hours)}
      {renderText()}
      {renderText(minutes)}
      {renderText()}
      {renderText(seconds)}
    </div>
  );
};

export default Countdown;
