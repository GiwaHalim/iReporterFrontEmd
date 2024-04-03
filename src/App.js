import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/signIn/SignIn";
import History from "./components/history/History";
import Home from "./components/home/Home";
import SignUp from "./components/signup/SignUp";
import RedFlagForm from "./components/redflagform/RedFlagForm";
import InterVentionForm from "./components/interventionform/InterventionForm";
import LogOut from "./components/signout/SignOut";
import Admin from "./components/admin/Admin";




function App() {
  
  const[user, setUser]= useState({})

  useEffect(() =>{
    try{
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt)
      setUser(user)
    }catch{

    }

  }, [])


  const checkAdmin = user.isAdmin ? [{
    path: "",
    element: <Admin/>
  },
  {
    path: "/signout",
    element: <LogOut/>
  }
]: 
  [
    {
      path:"",
      element: <Home  user={user._id}/>
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
      element: <RedFlagForm user={user._id}/>
    },
    {
      path: "/intervention",
      element: <InterVentionForm user={user._id}/>
    },
    {
      path: "/history",
      element: <History user={user._id}/>
    },
    {
      path: "/signout",
      element: <LogOut/>
    }
  ]
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar user={user._id} admin={user.isAdmin}/>,
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
