import './App.css'
import {Suspense} from "react";
import {Loader} from "./widgets/Loader/Loader";
import {useRoutes} from "react-router-dom";
import {AppRouts} from "src/app/providers/RouterProvider";


function App() {
    const AppRouter = useRoutes(AppRouts);
    return (
      <div className="siteContent">
          <Suspense fallback={<Loader/>}>
              {AppRouter}
          </Suspense>
      </div>
    )
}

export default App
