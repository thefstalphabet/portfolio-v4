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
];

export default routes;
