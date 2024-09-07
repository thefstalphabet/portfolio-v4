import { Link } from "react-router-dom";
import { ModeToggle } from "../app-theme/mode-toggle";

interface INavItems {
  title: string;
  path: string;
}
const navItems: INavItems[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "CV",
    path: "/cv",
  },
  {
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
            <Link to={item?.path} className="cursor-pointer hover:underline decoration-zinc-400">{item?.title}</Link>
          );
        })}
      </ul>
      <ModeToggle />
    </div>
  );
}
