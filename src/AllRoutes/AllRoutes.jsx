import { Route, Routes } from "react-router"
import { Home } from "../Components/Home"
import { Login } from "../Components/Login"
import { Resident } from "../Components/Resident"
import { SignUp } from "../Components/Signup"



export const AllRoutes = () => {

   return(

    <Routes>
    <Route path ="/" element ={<Home />} />
    <Route path ="/signup" element ={<SignUp />} />
    <Route path ="/login" element ={<Login />} />
    <Route path ="/resident/:id" element ={<Resident />} />
    </Routes>
   )
}