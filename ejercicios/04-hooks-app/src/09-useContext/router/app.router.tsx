import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";

export const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AboutPage />,
   },
   {
      path: "/Profile",
      element: <ProfilePage />,
   },
   {
      path: "/Login",
      element: <LoginPage />,
   },
   {
      path: '*',
      element: <Navigate to="/" />
   }
]);