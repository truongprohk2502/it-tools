import { ShieldAlertIcon } from "lucide-react";

interface Props {
  message: string;
}

const SqlAlert: React.FC<Props> = ({ message }) => {
  return (
    <div className="mt-4 flex items-center rounded-md border border-red-500 bg-red-200 px-6 py-4 text-red-500 dark:bg-red-300 dark:text-red-700">
      <ShieldAlertIcon className="h-8 w-8" />
      <span className="ml-4">{message}</span>
    </div>
  );
};

export default SqlAlert;
