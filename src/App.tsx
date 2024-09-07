import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/ui/navigation-bar";
import routes, { IRoutes } from "./lib/routes";

export default function App() {
  return (
    // min-w-[55%] w-[55%] sm:w-[100%]
    <div className="my-16 grid gap-20 mx-auto px-5 w-[100%] lg:w-[55%] lg:px-0">
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
