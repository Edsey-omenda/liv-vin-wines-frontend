import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../../config/constants";
import { Header } from "../Header";

// Define auth routes that should not have header/footer
const AUTH_ROUTES = [
  ROUTE_PATHS.SIGNIN,
  ROUTE_PATHS.SIGNUP,
  ROUTE_PATHS.FORGOT_PASSWORD,
] as const;

// Layout wrapper component
export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const isAuthPage = (AUTH_ROUTES as readonly string[]).includes(
    location.pathname
  );

  if (isAuthPage) {
    // Return children without header/footer for auth pages
    return <>{children}</>;
  }

  // Return children with header/footer for all other pages
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
