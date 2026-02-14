
//React 
import { useState } from "react"

//React-Router-DOM
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

//Assets
import loginImage from "@/assets/images/login-illustration.png"
import sophosLogo from "../../assets/logos/sophoschat-logo.png";


//UI Components
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import GoogleButton from "../../components/ui/GoogleButton"
import Divider from "../../components/ui/Divider"
import RememberForgot from "../../components/ui/RememberForgot"

//Services.AuthAPI
import { loginUser } from "@/services/auth.api";

export default function LoginCard() {
  const [email, setEmail] = useState("")
  const [password, setPassword] =  useState("")

  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  /* console.log(email)
  console.log(password) */

  const handleLogin = async (e) => {
    e.preventDefault()

    setMsg("")
    setLoading(true)

      try {
    const data = await loginUser(email, password);

    setMsg(data.message || "Login successful");
    console.log("Login response:", data);

    localStorage.setItem("auth", "true");
    navigate("/dashboard");
    
  } catch (err) {
    setMsg(err.message || "Could not connect to the server");

  } finally {
    setLoading(false);
  }

  }

  return (

    <div className="flex h-full min-h-screen justify-center items-center md:gap-20 md:px-20 ">

      <div className="min-h-full w-screen md:min-h-150 md:min-w-90 md:max-w-120 px-10 flex flex-col ">

        {/* Header Login */}
        <div className="flex flex-row justify-center items-end h-12 mb-5 mt-5">
          <img src={sophosLogo} alt="SophosChat Logo" className="w-12 lg:w-20" />
          <p className="font-medium text-xl lg:text-4xl" >ophosChatBot</p>
          
        </div>
        
         {/* Simple Divider */}
        <div className="flex flex-row justify-center items-center">
          <p className="w-[70%] h-1 bg-gray-100 mb-5"></p>
        </div>

        {/* Main */}
        <form 
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <h1 className="text-black font-bold text-4xl">Login</h1>
            <h2 className="text-center text-gray-500 font-medium text-lg">Enter your email and password to log in </h2>
          </div>

          {/* Email / Password Input Text */}
          <div className="flex flex-col w-full gap-4">
            <div>
              <p className="font-bold" >Email</p>
              <Input 
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </div>

            <div>
              <p className="font-bold">Password</p>
              <Input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              ></Input>
            </div>
            <RememberForgot></RememberForgot>
      
          </div>

           {/* Status message */}
          {msg ? (
            <p className="w-full text-center text-sm text-gray-700 bg-gray-100 rounded-md py-2">
              {msg}
            </p>
          ) : null}


          {/* Divider, GoogleButton, Sign Up */}
          <div className="flex flex-col w-full gap-2">
            <Button 
            variant="default" 
            className="rounded-lg w-full h-14"
            type="submit"
            disabled={loading}
            >
            {loading ? "Logging in..." : "Login"}



            </Button>
            <Divider>Or Sign in with</Divider>
            <GoogleButton className="w-full" onClick={() => console.log("Continue with Google")} />
          </div>

        </form>

        {/* Footer (sempre embaixo) */}
        <div className="mt-auto flex flex-col items-center justify-center mb-10 p-2">
          <p className="text-lg"> Don`t have an account? {" "}
            <Link to="/register" className="text-black  font-bold underline">Sign Up</Link> 
          </p>
        </div>


      </div>


      <div className="hidden lg:flex ">
        <div className="flex justify-center items-center bg-gray-200/80 rounded-lg min-w-120 h-180 relative ">

          <img className="scale-150 absolute" src={loginImage} alt="" />

        </div>
      </div>
    </div>
  )
}
