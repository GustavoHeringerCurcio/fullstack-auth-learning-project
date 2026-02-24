//React States
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//temporary for viewport tests
import LoginCard from "../features/auth/LoginCard"

//Layout Components
import Navbar from "../components/layout/Navbar"

//Features Components
import ChatBox from "../features/chat/ChatBox"
import Login from "./Login"

export default function Dashboard(){
    const navigate = useNavigate()


    //function to protected the dashboard if is NOT auth.
    useEffect(() => {
        const isAuth = localStorage.getItem("auth")
        
        if (!isAuth) {
            navigate("/login")
        }

    }, [navigate])


    return(
        <div>
            <Navbar></Navbar>
            <ChatBox></ChatBox>
            
        </div>
    )
}