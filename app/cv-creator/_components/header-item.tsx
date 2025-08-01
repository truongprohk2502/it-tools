"use client";

interface Props {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const HeaderItem: React.FC<Props> = ({ title, className, children }) => {
  return (
    <div className="flex flex-col items-center justify-start px-4 py-2">
      <h2 className="font-semibold">{title}</h2>
      <div className={className}>{children}</div>
    </div>
  );
};

export default HeaderItem;
