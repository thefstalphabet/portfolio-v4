import { ModeToggle } from "../app-theme/mode-toggle";

interface INavItems {
  title: string;
  path: string;
}
const navItems: INavItems[] = [
  {
    title: "Home",
    path: "/home",
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
            <li className="cursor-pointer hover:underline decoration-zinc-400">{item?.title}</li>
          );
        })}
      </ul>
      <ModeToggle />
    </div>
  );
}
