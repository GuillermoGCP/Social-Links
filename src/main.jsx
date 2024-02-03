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
import ResetPasswordBox from "./pages/ResetPasswordBox";
import ResetPassword from "./pages/ResetPassword";
import "./index.css";
import { TokenProvider } from "./contexs/tokenContext";
import MainPage from "./pages/MainPage";
import LinkDetailsPage from "./pages/LinkDetailsPage";
import ProfileUserEdit from "./pages/ProfileUserEdit";
import LinksToday from "./components/LinksToday";
import NewPass from "./components/NewPass";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const router = createBrowserRouter([
  { path: "", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "newPass", element: <NewPass /> },
  { path: "resetPassword/:token", element: <ResetPassword /> },

  {
    path: "",
    element: <BaseComponent />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/profileEdit", element: <ProfileUserEdit /> },
      { path: "main", element: <MainPage /> },
      { path: "linksToday", element: <LinksToday /> },
      { path: "/:id", element: <LinkDetailsPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={3000}
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
