import React from "react";
import LoadingImg from "../assets/loading-gif.gif";

function LoadingComponent() {
  return (
    <div className="container mx-auto w-full h-full flex items-center justify-center p-[100px]">
      <div className="flex items-center justify-center p-50px p-[80px]">
        <img src={LoadingImg} alt="Loading..." className="" />
      </div>
    </div>
  );
}

export default LoadingComponent;
