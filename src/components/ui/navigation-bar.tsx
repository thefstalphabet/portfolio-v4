import { Link } from "react-router-dom";
import { ModeToggle } from "../app-theme/mode-toggle";

interface INavItems {
  key: number;
  title: string;
  path: string;
}
const navItems: INavItems[] = [
  {
    key: 1,
    title: "Home",
    path: "/",
  },
  {
    key: 2,
    title: "CV",
    path: "/cv",
  },
  {
    key: 3,
    title: "Products",
    path: "/products",
  },
];

export default function NavigationBar() {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex space-x-4">
        {navItems.map((item: INavItems) => {
          return (
            <Link
              key={item.key}
              to={item?.path}
              className="cursor-pointer hover:underline decoration-zinc-400"
            >
              {item?.title}
            </Link>
          );
        })}
      </ul>
      <ModeToggle />
    </div>
  );
}
