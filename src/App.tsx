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
import { Toaster } from "react-hot-toast";
const HomePage = lazy(() => import("./pages/HomePage"));
const Friends = lazy(() => import("./pages/Friends"));
const LoginPage = lazy(() => import("./pages/Accounts/LoginPage"));
const LogoutPage = lazy(() => import("./pages/Accounts/LogoutPage"));
const SignUpPage = lazy(() => import("./pages/Accounts/SignUpPage"));
const VerifyEmailPage = lazy(() => import("./pages/Accounts/VerifyEmailPage"));
const GoogleLoginPage = lazy(() => import('./pages/Accounts/GoogleLoginPage'));
const ProfilePage = lazy(() => import("./pages/Accounts/ProfilePage"));
const PostDetailPage = lazy(() => import('./pages/Posts/PostDetailPage'));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));


const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<FrameLayout />}>
            <Route element={<AuthRequired />}>
                <Route index element={<HomePage />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/:username" element={<ProfilePage />} />
                <Route path="/posts/:id" element={<PostDetailPage/>}/>
          <Route path="/logout" element={<LogoutPage />} />
            </Route>
        </Route>,
        <Route path="/accounts" element={<MainLayout />}>
            <Route element={<ProtectedRoute />}>
            <Route path="/accounts/login" element={<LoginPage />} />
            <Route path="/accounts/signup" element={<SignUpPage />} />
            <Route path="/accounts/verify-email" element={<VerifyEmailPage />} />
            <Route path="/accounts/oauth2/google" element={<GoogleLoginPage/>} />
            </Route>
        </Route>,
        <Route path="*" element={<NotFoundPage />} />
    ])
);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
};

export default App;
