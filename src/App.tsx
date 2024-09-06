import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/ui/navigation-bar";
import routes, { IRoutes } from "./lib/routes";

export default function App() {
  return (
    <div className="mx-64 my-10">
      <NavigationBar />
      <Routes>
        {routes.map((route: IRoutes) => {
          const { path, element } = route;
          return <Route key={path} element={element} path={path} />;
        })}
      </Routes>
    </div>
  );
}
