import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseComponent from "./components/BaseComponent";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import "./index.css";
import { TokenProvider } from "./contexs/tokenContext";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "register", element: <Register /> },
  {
    path: "",
    element: <BaseComponent />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <PageNotFound /> },
      { path: "main", element: <MainPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
