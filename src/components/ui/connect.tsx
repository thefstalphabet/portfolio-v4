import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface IConnectItems {
  title: string;
  path: string;
}
const connectItems: IConnectItems[] = [
  {
    title: "twitter",
    path: "https://twitter.com/thefstalphabet",
  },
  {
    title: "mail",
    path: "akashpatel10000@gmail.com",
  },
  {
    title: "linkedin",
    path: "https://www.linkedin.com/in/thefstalphabet",
  },
];
export default function Connect() {
  return (
    <div className="grid gap-5">
      <h2 className="text-xl font-medium">Connect</h2>
      <ul className="flex space-x-4">
        {connectItems.map((item: IConnectItems) => {
          return (
            <Link
              to={item?.path}
              target="_blank"
              className="cursor-pointer hover:underline decoration-zinc-400 flex items-center"
            >
              <GoArrowUpRight className="text-lg" />
              {item?.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
