import { Color } from "../constants";

interface Props {
  label: string;
  color: Color;
  children: React.ReactNode;
}

const MainInfo: React.FC<Props> = ({ label, color, children }) => {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex items-center">
        <p style={{ color }} className="text-[1.6em] font-semibold">
          {label}
        </p>
        <div
          style={{ backgroundColor: color }}
          className="ml-4 h-0.5 flex-auto"
        />
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default MainInfo;
