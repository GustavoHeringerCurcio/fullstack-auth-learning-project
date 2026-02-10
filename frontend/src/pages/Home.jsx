//Components
import Navbar from "@/components/layout/Navbar"
import LoginCard from "@/features/auth/LoginCard"

//ui components
import Button from "@/components/ui/Button"

//react-router-dom
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();


  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-col justify-center items-center mt-5">
      
      {/* Main H1 & H2 */}
      <section className="flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-3xl">Turn your ideas into intelligent chat experiences</h1>
        <p className="text-lg">From prototype to production, build AI conversations that engage users, automate workflows, and scale with your product. </p>
        <div className="flex flex-row gap-4">
          <Button onClick={()=> navigate("/login")}>Get Started</Button>
          <Button onClick={()=> navigate("/")} variant="secondary">Learn More</Button>
        </div>
      </section>
      {/*  */}
      <section>

      </section>

    </div>
    </>
  );
} 
export default Home;