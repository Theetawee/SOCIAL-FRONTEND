import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import FrameLayout from "./layouts/FrameLayout";
import AuthRequired from "./components/utils/AuthRequired";
import { lazy } from "react";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const Friends = lazy(() => import("./pages/Friends"));
const LoginPage = lazy(() => import("./pages/Accounts/LoginPage"));

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<FrameLayout />}>
            <Route element={<AuthRequired />}>
                <Route index element={<HomePage />} />
                <Route path="/friends" element={<Friends />} />
            </Route>
        </Route>,
        <Route path="/accounts" element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
                <Route path="/accounts/login" element={<LoginPage />} />
            </Route>
        </Route>,
    ])
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
