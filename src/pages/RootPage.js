import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootPage;
