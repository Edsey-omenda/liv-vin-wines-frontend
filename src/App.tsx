// App.tsx (Production-Ready Version)
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTE_PATHS } from "./config/constants";
import { LayoutWrapper } from "./components/common/Layout/Layout";

// Lazy load components for better performance
const pageComponents = {
  HomePage: lazy(() => import("./pages/HomePage")),
  ShopPage: lazy(() => import("./pages/ShopPage")),
  ProductDetailsPage: lazy(() => import("./pages/ProductDetailsPage")),
  CartPage: lazy(() => import("./pages/CartPage")),
  CheckoutPage: lazy(() => import("./pages/CheckoutPage")),
  WineClubPage: lazy(() => import("./pages/WineClubPage")),
  WineTastingsPage: lazy(() => import("./pages/WineTastingsPage")),
  WineBarPage: lazy(() => import("./pages/WineBarPage")),
  EventsPage: lazy(() => import("./pages/EventsPage")),
  AboutPage: lazy(() => import("./pages/AboutPage")),
  ContactPage: lazy(() => import("./pages/ContactPage")),
  SignInPage: lazy(() => import("./pages/SignInPage")),
  SignUpPage: lazy(() => import("./pages/SignUpPage")),
  ForgotPasswordPage: lazy(() => import("./pages/ForgotPasswordPage")),
  DashboardPage: lazy(() => import("./pages/DashboardPage")),
  ProfilePage: lazy(() => import("./pages/ProfilePage")),
  OrderHistoryPage: lazy(() => import("./pages/OrderHistoryPage")),
  WishlistPage: lazy(() => import("./pages/WishListPage")),
  AdminPage: lazy(() => import("./pages/AdminPage")),
  NotFoundPage: lazy(() => import("./pages/NotFoundPage")),
} as const;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Suspense>
          <Routes>
            {/* SEO-friendly redirects for legacy URLs */}
            <Route
              path="/home"
              element={<Navigate to={ROUTE_PATHS.HOME} replace />}
            />
            <Route
              path="/products"
              element={<Navigate to={ROUTE_PATHS.SHOP} replace />}
            />
            <Route
              path="/login"
              element={<Navigate to={ROUTE_PATHS.SIGNIN} replace />}
            />
            <Route
              path="/register"
              element={<Navigate to={ROUTE_PATHS.SIGNUP} replace />}
            />
            <Route
              path="/reset-password"
              element={<Navigate to={ROUTE_PATHS.FORGOT_PASSWORD} replace />}
            />
            <Route
              path="/account"
              element={<Navigate to={ROUTE_PATHS.PROFILE} replace />}
            />
            <Route
              path="/wine-club"
              element={<Navigate to={ROUTE_PATHS.WINE_CLUB} replace />}
            />

            {/* Main Routes */}
            <Route
              path={ROUTE_PATHS.HOME}
              element={<pageComponents.HomePage />}
            />
            <Route
              path={ROUTE_PATHS.SHOP}
              element={<pageComponents.ShopPage />}
            />
            <Route
              path={ROUTE_PATHS.PRODUCT_DETAILS}
              element={<pageComponents.ProductDetailsPage />}
            />
            <Route
              path={ROUTE_PATHS.CART}
              element={<pageComponents.CartPage />}
            />
            <Route
              path={ROUTE_PATHS.CHECKOUT}
              element={<pageComponents.CheckoutPage />}
            />
            <Route
              path={ROUTE_PATHS.WINE_CLUB}
              element={<pageComponents.WineClubPage />}
            />
            <Route
              path={ROUTE_PATHS.WINE_TASTINGS}
              element={<pageComponents.WineTastingsPage />}
            />
            <Route
              path={ROUTE_PATHS.WINE_BAR}
              element={<pageComponents.WineBarPage />}
            />
            <Route
              path={ROUTE_PATHS.EVENTS}
              element={<pageComponents.EventsPage />}
            />
            <Route
              path={ROUTE_PATHS.ABOUT}
              element={<pageComponents.AboutPage />}
            />
            <Route
              path={ROUTE_PATHS.CONTACT}
              element={<pageComponents.ContactPage />}
            />

            {/* Auth Routes (no header/footer) */}
            <Route
              path={ROUTE_PATHS.SIGNIN}
              element={<pageComponents.SignInPage />}
            />
            <Route
              path={ROUTE_PATHS.SIGNUP}
              element={<pageComponents.SignUpPage />}
            />
            <Route
              path={ROUTE_PATHS.FORGOT_PASSWORD}
              element={<pageComponents.ForgotPasswordPage />}
            />

            {/* Protected Routes */}
            <Route
              path={ROUTE_PATHS.DASHBOARD}
              element={<pageComponents.DashboardPage />}
            />
            <Route
              path={ROUTE_PATHS.PROFILE}
              element={<pageComponents.ProfilePage />}
            />
            <Route
              path={ROUTE_PATHS.ORDERHISTORY}
              element={<pageComponents.OrderHistoryPage />}
            />
            <Route
              path={ROUTE_PATHS.WISHLIST}
              element={<pageComponents.WishlistPage />}
            />
            <Route
              path={ROUTE_PATHS.ADMIN}
              element={<pageComponents.AdminPage />}
            />

            {/* 404 Route */}
            <Route path="*" element={<pageComponents.NotFoundPage />} />
          </Routes>
        </Suspense>

        {/* Development only - Route debugger */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
            Route: {window.location.pathname}
          </div>
        )}
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default App;
