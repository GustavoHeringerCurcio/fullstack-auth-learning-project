
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//React-Router-DOM
import { Link } from "react-router-dom"

//Assets
import RegisterImage from "@/assets/images/register-illustration.png"
import sophosLogo from "../../assets/logos/sophoschat-logo.png";


//UI Components
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import GoogleButton from "../../components/ui/GoogleButton"
import Divider from "../../components/ui/Divider"
import RememberForgot from "../../components/ui/RememberForgot"
import CheckBox from "../../components/ui/CheckBox";

//Services.AuthAPI
import { registerUser } from "@/services/auth.api";

export default function LoginCard() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false);


  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault()
    if(loading) return;

    setMsg("")
    

    if (!acceptedTerms) {
      setMsg("You must accept the Terms and Privacy Policies");
      return;
    }
    
    setLoading(true)

    try {
      const data = await registerUser({ name, email, password, confirmPassword, acceptedTerms})

      setMsg(data.message || "Registered successfully")
      console.log(`Register are: ${msg}`)
      console.log("Submitting register:", { name, email, password, confirmPassword, acceptedTerms });

      navigate("/login");
    } 
    catch (error) {
      setMsg(error.message || "Register failed" )
    } finally {
      setLoading(false)
    }
  }



  return (

    <div className="flex md:flex-row-reverse h-full min-h-screen justify-center lg:items-center md:gap-20 md:px-20 overflow-y-auto
    
    "
    /* Resposivness for old laptops/notebooks Just a test */
    
    >

      {/* Register Form  */}
      <div className="w-full md:min-h-150 md:min-w-100 md:max-w-120 px-10 flex flex-col gap-2">

        {/* Header Login */}
        <div className="flex flex-row justify-center items-end h-12">
          <img src={sophosLogo} alt="SophosChat Logo" className="w-12 2xl:w-20" />
          <p className="font-medium text-xl 2xl:text-4xl" >ophosChatBot</p>
        </div>
        
         {/* Simple Divider */}
        <div className="flex flex-row justify-center items-center">
          <p className="w-[70%] h-1 bg-gray-100"></p>
        </div>

        {/* Main */}
        <form 
        onSubmit={handleRegister}
        className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-black font-bold text-lg lg:text-2xl">Register</h1>
            <h2 className="text-center text-gray-500 font-medium text-medium">Create an account or log in to explore about our app </h2>
          </div>

          {/* Name / Email / Password Input Text */}
          <div className="flex flex-col w-full lg:gap-1">

            {/* Name */}
            <div>
              <p className="font-bold">Name or username</p>
              <Input 
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ></Input>
            </div>

            {/* Email */}
            <div>
              <p className="font-bold" >Email</p>
              <Input 
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </div>

            {/* Password */}
            <div>
              <p className="font-bold" >Password</p>
              <Input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ></Input>
            </div>

            {/* Confirmpassword */}
            <div>

              
              <p className="font-bold" >Confirm Password</p>
              <Input 
              type="password" 
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              ></Input>
            </div>

            {/* Checkbox */}
            <div className="p-2">
              <CheckBox
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              >
                I agree to all the Terms and Privacy Policies
              </CheckBox>
            </div>

            {/* Status message */}
            {msg ? (
              <p className="w-full text-center text-sm text-gray-700 bg-gray-100 rounded-md py-2">
                {msg}
              </p>
            ) : null}

      
          </div>


          {/* Divider, GoogleButton, Sign Up */}
          <div className="flex flex-col w-full ">
            <Button 
            variant="default" 
            className="rounded-lg w-full h-14"
            type="submit"
            disabled={loading}

            >
             
            {loading ? "creating..": "Create Account"}
            </Button>

            <Divider>Or Sign up with</Divider>
            <GoogleButton className="w-full" onClick={() => console.log("Continue with Google")} />
          </div>

        </form>

        {/* Footer (sempre embaixo) */}
        <div className="mt-auto flex flex-col items-center justify-center mb-10 p-2">
          <p className="text-lg"> Already have an account? {" "}
            <Link to="/login" className="text-black font-bold underline">Sign in</Link> 
          </p>
        </div>


      </div>


      <div className="hidden lg:flex lg:flex-col lg:justify-center h-full">
        
        {/* Register Image */}
        <div className="flex justify-center items-center bg-gray-200/80 rounded-lg w-120 h-180 relative">
          <img className="w-full h-full absolute" src={RegisterImage} alt="" />
        </div>

      </div>
    </div>
  )
}
