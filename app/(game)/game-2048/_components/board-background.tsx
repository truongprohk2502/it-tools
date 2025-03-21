const BoardBackground: React.FC = () => {
  return Array.from({ length: 16 }).map((_, index) => (
    <div
      key={index}
      className="flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-500"
    />
  ));
};

export default BoardBackground;
