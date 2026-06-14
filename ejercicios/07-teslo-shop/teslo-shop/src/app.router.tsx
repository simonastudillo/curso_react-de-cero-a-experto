import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { ShopLayout } from "./shop/layout/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";

import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";

import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { AdminRoutes, NotAuthenticatedRoutes } from "./components/routes/ProtectedRoutes";


const AuthLayout = lazy(() => import("./auth/layout/AuthLayout"));
const AdminLayout = lazy(() => import("./admin/layout/AdminLayout"));

export const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <ShopLayout />,
      children: [
         {
            index: true,
            element: <HomePage />
         },
         {
            path: 'product/:idSlug',
            element: <ProductPage />
         },
         {
            path: 'gender/:gender',
            element: <GenderPage />
         }
      ]
   },
   {
      path: "/auth",
      element: (
         <NotAuthenticatedRoutes>
            <AuthLayout />
         </NotAuthenticatedRoutes>),
      children: [
         {
            index: true,
            element: <Navigate to="/auth/login" />
         },
         {
            path: 'login',
            element: <LoginPage />
         },
         {
            path: 'register',
            element: <RegisterPage />
         }
      ]
   },
   {
      path: "/admin",
      element: (
         <AdminRoutes>
            <AdminLayout />
         </AdminRoutes>
      ),
      children: [
         {
            index: true,
            element: <DashboardPage />
         },
         {
            path: 'products',
            element: <AdminProductsPage />
         },
         {
            path: 'products/:id',
            element: <AdminProductPage />
         }
      ]
   },
   {
      path: "*",
      element: <Navigate to="/" />
   }
]);