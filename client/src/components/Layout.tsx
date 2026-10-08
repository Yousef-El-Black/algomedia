import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./Preloader";
import MsgsContainer from "./MsgsContainer";
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <MsgsContainer />
      </Suspense>
    </>
  );
};

export default Layout;
