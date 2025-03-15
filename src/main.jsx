import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Error from "./components/Error/Error.jsx";
import Home from "./components/Home/Home.jsx";
import Item from "./components/Item/Item.jsx";
import BookDetail from "./components/BookDetail/BookDetail.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/list",
        element: <Item></Item>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/read",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <ToastContainer />
  </StrictMode>
);
