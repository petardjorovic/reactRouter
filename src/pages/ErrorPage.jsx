import React from "react";
import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured.";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Page Not Found!";
    message = "Couldn't find resource or page.";
  }
  return (
    <div className="container w-[100vw] h-[100vh] flex flex-col items-center justify-start mt-[100px] gap-[30px]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{message}</p>
      <Link to="/" className="bg-red-600 px-6 py-3 rounded-md text-white">
        Back To Home Page
      </Link>
    </div>
  );
}

export default ErrorPage;
