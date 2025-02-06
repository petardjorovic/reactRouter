import React from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ToggleModeComponent({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div onClick={handleDarkMode}>
      {darkMode ? <CiLight size={45} /> : <MdDarkMode size={45} />}
    </div>
  );
}

export default ToggleModeComponent;
