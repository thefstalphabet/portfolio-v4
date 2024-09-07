import CV from "../pages/cv/cv";
import Home from "../pages/home";

export interface IRoutes {
  path: string;
  element: JSX.Element;
}
const routes: Array<IRoutes> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cv",
    element: <CV />,
  },
];

export default routes;
