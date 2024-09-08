import CV from "../pages/cv/cv";
import Home from "../pages/home";
import PageNotFound from "../pages/page-not-found";
import Products from "../pages/products";

export interface IRoutes {
  path: string;
  element: JSX.Element;
}
const routes: Array<IRoutes> = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cv",
    element: <CV />,
  },
  {
    path: "/products",
    element: <Products />,
  },
];

export default routes;
