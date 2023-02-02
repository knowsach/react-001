import React, {lazy, Suspense} from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Body from "./components/body";
import Footer from './components/footer.js';
import Header from './components/header.js'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from './components/error';
import Contact from './components/contact';
import RestaurantDetail from "./components/restaurant_detail";
import Profile from "./components/profile_class_component";
import Shimmer from "./components/shimmer";

// lazy loading
// on demand loading
const Instamart = lazy(() =>{
 return import ("./components/instamart")
});

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <AppLayout /> ,
    errorElement: <Error />,
    children : [
      {
        path: '/',
        element : <Body />
      },
      {
        path: '/about',
        element : <About />,
        children : [
          {
            path: 'profile',
            element : <Profile />
          }
        ]
      },
      {
        path: '/contact',
        element : <Contact />
      },
      {
        path: '/restaurant/:id',
        element : <RestaurantDetail />
      },
      {
        path: '/instamart',
        element : 
        (<Suspense fallback={<Shimmer/>}> 
            <Instamart />
        </Suspense>
        )
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
