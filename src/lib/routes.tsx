import Home from "../pages/home";
import PageNotFound from "../pages/page-not-found";
import Products from "../pages/products";

export interface IRoutes {
  path: string;
  element: JSX.Element;
  navigationBar?: boolean;
}
const routes: Array<IRoutes> = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <Home />,
    navigationBar: true,
  },
  {
    path: "/products",
    element: <Products />,
    navigationBar: true,
  },
];

export default routes;
