import "./App.css";
import { PageProvider } from "./Context/PageContext";
import { SellerProvider } from "./Context/SellerContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Components/Main";

import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";
import Checkout from "./Pages/Checkout";
import CreateAccount from "./Pages/CreateAccount";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage";
import Search from "./Pages/Search";
import SellerHome from "./Pages/SellerHome";
import Settings from "./Pages/Settings";
import ShopPage from "./Pages/ShopPage";
import UserHome from "./Pages/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <UserHome />,
        error: <ErrorPage />,
      },
      {
        path: "/cart/:id",
        element: <Cart />,
        error: <ErrorPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
        error: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        error: <ErrorPage />,
      },
      {
        path: "/productpage/:id",
        element: <ProductPage />,
        error: <ErrorPage />,
      },
      {
        path: "/search/:params",
        element: <Search />,
        error: <ErrorPage />,
      },
      {
        path: "/sellerhome",
        element: <SellerHome />,
        error: <ErrorPage />,
      },
      {
        path: "/shop/:id",
        element: <ShopPage />,
        error: <ErrorPage />,
      },
    ],
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
    error: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    error: <ErrorPage />,
  },

  {
    path: "/settings",
    element: <Settings />,
    error: <ErrorPage />,
  },
]);

function App() {
  return (
    <PageProvider>
      <SellerProvider>
        <div
          className="w-full"
          // className="App
          // font-TradeWinds
          // min-h-screen bg-cover
          // relative flex flex-col items-center"
          //bg-golf
        >
          <RouterProvider router={router} />
        </div>
      </SellerProvider>
    </PageProvider>
  );
}

export default App;
