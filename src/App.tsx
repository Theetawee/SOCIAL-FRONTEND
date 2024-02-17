import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import FrameLayout from "./layouts/FrameLayout";
import AuthRequired from "./components/utils/AuthRequired";
import { lazy } from "react";
// import ProtectedRoute from "./components/utils/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthenticatePage = lazy(() => import("./pages/Utils/Authenticate"));



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<FrameLayout />}>
      <Route element={<AuthRequired/>}>
        <Route index element={<HomePage/>} />
      </Route>,
      {/* <Route element={<ProtectedRoute/> }> */}
        <Route path="authenticate-user" element={<AuthenticatePage />} />
      {/* </Route> */}
    </Route>
  ])
)




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
