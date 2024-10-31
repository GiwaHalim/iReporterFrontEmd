import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const SignOut = () => {

    // const navigate = useNavigate()
    useEffect(() =>{
        localStorage.removeItem("token")
// @ts-ignore
      window.location = "/"
        
    }, [])

    return ( null);
}
 
export default SignOut;