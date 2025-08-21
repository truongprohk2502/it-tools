import { HangmanStatus } from "../constants";

interface Props {
  status: HangmanStatus;
}

const Hangman: React.FC<Props> = ({ status }) => {
  return (
    <div className="relative mx-auto h-[20rem] w-[16rem]">
      {status >= HangmanStatus.Head && (
        <div className="absolute -right-[calc(8%-0.625rem/2)] top-[calc(10%-0.2rem)] aspect-square w-[16%] rounded-full border-[0.4rem] border-black dark:border-neutral-400" />
      )}
      {status >= HangmanStatus.Body && (
        <div className="absolute right-0 top-[20%] h-[25%] w-2.5 rounded-b-full bg-black dark:bg-neutral-400" />
      )}
      {status >= HangmanStatus.LeftArm && (
        <div className="absolute right-0 top-[25%] h-2.5 w-[15%] bg-black dark:bg-neutral-400" />
      )}
      {status >= HangmanStatus.RightArm && (
        <div className="absolute right-0 top-[25%] h-2.5 w-[15%] translate-x-[calc(100%-0.625rem)] bg-black dark:bg-neutral-400" />
      )}
      {status >= HangmanStatus.LeftLeg && (
        <div className="absolute right-0 top-[calc(45%+0.225rem)] h-2.5 w-[15%] -rotate-45 bg-black dark:bg-neutral-400" />
      )}
      {status >= HangmanStatus.RightLeg && (
        <div className="absolute right-0 top-[calc(45%+0.225rem)] h-2.5 w-[15%] translate-x-[66.67%] rotate-45 bg-black dark:bg-neutral-400" />
      )}
      <div className="absolute right-0 top-0 h-[10%] w-2.5 bg-black dark:bg-neutral-400" />
      <div className="absolute left-[40%] right-0 top-0 h-2.5 bg-black dark:bg-neutral-400" />
      <div className="absolute inset-y-0 left-[calc(40%-0.625rem/2)] w-2.5 bg-black dark:bg-neutral-400" />
      <div className="absolute bottom-0 left-[10%] h-2.5 w-[60%] rounded-lg bg-black dark:bg-neutral-400" />
      <div className="absolute -top-[0.3rem] left-[46%] h-[20%] w-2.5 rotate-45 bg-black dark:bg-neutral-400" />
    </div>
  );
};

export default Hangman;
