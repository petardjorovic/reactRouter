import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
// pages
import ProductsPage from "./pages/ProductsPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      {/* step 3: RETURN PAGE */}
      <Outlet />
    </div>
  );
}

export default App;
