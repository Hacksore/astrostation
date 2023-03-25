import { Background } from "@Root/src/App";
import clsx from "clsx";

export const BackgroundDropdownItem = ({
  isPicked,
  setBackgroundId,
  background,
  title,
  className,
}: {
  isPicked: boolean;
  setBackgroundId: any;
  background: Background;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "cursor-pointer py-1 bg-gray-300 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900",
        isPicked && "bg-gray-100 dark:bg-gray-900"
      )}
      onClick={() => setBackgroundId(background)}
    >
      <div className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
        {title}
      </div>
    </div>
  );
}
