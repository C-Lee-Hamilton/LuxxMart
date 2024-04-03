import "./App.css";

import { PageProvider } from "./Context/PageContext";
import { SellerProvider } from "./Context/SellerContext";
import { UserProvider } from "./Context/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Components/Main";

import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";
import Checkout from "./Pages/Checkout";

import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage";
import Search from "./Pages/Search";
import SellerHome from "./Pages/SellerPages/SellerHome";
import Settings from "./Pages/Settings";
import ShopPage from "./Pages/ShopPage";
import UserHome from "./Pages/UserHome";
import OrdersReturns from "./Pages/OrdersReturns";
import SearchHistory from "./Pages/SearchHistory";
import TOS from "./Pages/TOS";
import FAQ from "./Pages/FAQ";
import AddItem from "./Pages/SellerPages/AddItem";
import EditItem from "./Pages/SellerPages/EditItem";
import LoginCard from "./Components/loginCards/loginCard";
import CreateCard from "./Components/loginCards/createCard";
import CreateSellerCard from "./Components/loginCards/createSellerCard";

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
        path: "/cart/",
        //add id to path
        element: <Cart />,
        error: <ErrorPage />,
      },
      {
        path: "/categories",
        //add parameters
        element: <Categories />,
        error: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        error: <ErrorPage />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
        error: <ErrorPage />,
      },
      {
        path: "/ordersreturns",
        element: <OrdersReturns />,
        error: <ErrorPage />,
      },
      {
        path: "/productpage/",
        //add parameters :itemid
        element: <ProductPage />,
        error: <ErrorPage />,
      },
      {
        path: "/search",
        //add parameters
        element: <Search />,
        error: <ErrorPage />,
      },
      {
        path: "/searchhistory",
        //add parameters
        element: <SearchHistory />,
        error: <ErrorPage />,
      },
      {
        path: "/sellerHome",
        element: <SellerHome />,
        error: <ErrorPage />,
      },
      {
        path: "/additem",
        element: <AddItem />,
        error: <ErrorPage />,
      },
      {
        path: "/edititem",
        element: <EditItem />,
        error: <ErrorPage />,
      },
      {
        path: "/settings",
        element: <Settings />,
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
    path: "/login",
    element: <Login />,
    children: [
      {
        index: true,
        element: <LoginCard />,
        error: <ErrorPage />,
      },
      {
        path: "/login/createcard",
        element: <CreateCard />,
        error: <ErrorPage />,
      },
      {
        path: "/login/createsellercard",
        element: <CreateSellerCard />,
        error: <ErrorPage />,
      },
    ],

    error: <ErrorPage />,
  },
  {
    path: "/termsOfService",
    element: <TOS />,
    error: <ErrorPage />,
  },
]);

function App() {
  return (
    <PageProvider>
      <UserProvider>
        <SellerProvider>
          <div className="w-full h-full bg-offwhite">
            <RouterProvider router={router} />
          </div>
        </SellerProvider>
      </UserProvider>
    </PageProvider>
  );
}

export default App;
