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
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "./components/common/CommonError";
const HomePage = lazy(() => import("./pages/HomePage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage"));
const LoginPage = lazy(() => import("./pages/Accounts/LoginPage"));
const LogoutPage = lazy(() => import("./pages/Accounts/LogoutPage"));
const SignUpPage = lazy(() => import("./pages/Accounts/SignUpPage"));
const VerifyEmailPage = lazy(() => import("./pages/Accounts/VerifyEmailPage"));
const GoogleLoginPage = lazy(() => import("./pages/Accounts/GoogleLoginPage"));
const ProfilePage = lazy(() => import("./pages/Accounts/ProfilePage"));
const PostDetailPage = lazy(() => import("./pages/Posts/PostDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ResetPasswordPage = lazy(
    () => import("./pages/Accounts/ResetPasswordPage")
);
const IntroPage = lazy(() => import("./pages/IntroPage"));
const PasswordResetConfirmPage = lazy(
    () => import("./pages/Accounts/PasswordResetConfirmPage")
);
const AccountActivationPage = lazy(
    () => import("./pages/Accounts/AccountActivationPage")
);
const ComposePage = lazy(() => import("./pages/Posts/ComposePage"));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage'));



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<FrameLayout />}>
      <Route path="/:username" element={<ProfilePage />} />
      <Route element={<AuthRequired />}>
        <Route index path="/home" element={<HomePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/compose" element={<ComposePage />} />
        <Route path="/notifications" element={<NotificationsPage/>}/>
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Route>
    </Route>,
    <Route path="/" element={<MainLayout />}>
      <Route element={<ProtectedRoute />}>
        <Route index element={<IntroPage />} />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="/accounts/signup" element={<SignUpPage />} />
        <Route path="/accounts/verify-email" element={<VerifyEmailPage />} />
        <Route path="/accounts/oauth2/google/" element={<GoogleLoginPage />} />
        <Route
          path="/accounts/reset-password"
          element={<ResetPasswordPage />}
        />
        <Route
          path="/accounts/password/reset/confirm/:uid/:token"
          element={<PasswordResetConfirmPage />}
        />
        <Route
          path="/accounts/activate/:token"
          element={<AccountActivationPage />}
        />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
      </Route>
    </Route>,
    <Route path="/" element={<MainLayout />}>
      <Route path="/search" element={<SearchPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ])
);

const App = () => {
    return (
        <ErrorBoundary fallback={<CommonError/>}>
            <RouterProvider router={router} />
            <Toaster />
        </ErrorBoundary>
    );
};

export default App;
