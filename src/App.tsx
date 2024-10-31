import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/nav/NavBar";
import History from "./components/history/History";
import Home from "./components/home/Home";
import SignUp from "./components/signup/SignUp";
import RedFlagForm from "./components/redflagform/RedFlagForm";
import InterVentionForm from "./components/interventionform/InterventionForm";
import LogOut from "./components/signout/SignOut";
import Admin from "./components/admin/Admin";
import SignIn from "./components/signIn/SignIn";




function App() {

  interface UserInterface{
    _id: string,
    isAdmin: boolean,
    iat: number
  }
  
  const[user, setUser]= useState <UserInterface | null>(null)

  useEffect(() =>{
    try{
      const jwt = localStorage.getItem('token');
      if(jwt){
        const user = jwtDecode<JwtPayload & UserInterface>(jwt)
        setUser(user)
      }
    }catch (ex){
      console.log(ex)
    }

  }, [])

  interface Route {
    path: string;
    element: JSX.Element;
  }


  const userId = user ? user._id : null
  const checkAdmin: Route[] =
   user && user.isAdmin ? [{
    path: "",
    element: <Admin />
  },
  {
    path: "/signout",
    element: <LogOut/>
  }
]: 
  [
    {
      path:"",
      element: <Home  user={userId}/>
    },
    {
      path: "/signin",
      element: <SignIn/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/redflag",
      element: <RedFlagForm user={userId}/>
    },
    {
      path: "/intervention",
      element: <InterVentionForm user={userId}/>
    },
    {
      path: "/history",
      element: <History user={userId}/>
    },
    {
      path: "/signout",
      element: <LogOut/>
    }]


const router = createBrowserRouter([
  {
    path: "/",
    element: user ? <NavBar user={user._id} admin={user.isAdmin}/> : <NavBar user={null} admin={null}/>,
    errorElement: <ErrorPage />,
    children: checkAdmin
  },
  
]);

  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer />
    </>
  );
}

export default App;
