import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.theme) {
      document.querySelector("html").classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.theme = "";
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
      <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* step 3: RETURN PAGE */}
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
