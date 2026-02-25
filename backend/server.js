import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import OpenAI from "openai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

//fake dataBase, NOTE: need to use MongoDB or SQL
const USERS = [
  { name: "admin", email: "admin", password: "admin" },
  { name: "ad", email: "ad", password: "ad", }
  
]

/* to check backend status */
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "Backend is running" });
});




/* Register API (NOTE: just pushing the data to Array USERS, for now) */
app.post("/api/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  console.log("REGISTER BODY:", req.body);

  
  if(!name) {
    return res.status(400).json({ ok: false, message: "Name is required" })
  }
  
  if(!email) {
    return res.status(400).json({ ok: false, message: "Email is required" })
  }

  if(!password) {
    return res.status(400).json({ ok: false, message: "Password is Required"})
  }
  if(!confirmPassword) {
    return res.status(400).json({ ok: false, message: "Confirm password is required" })
  }

  //Rule to cancel if password doesnt matches
  if(password !== confirmPassword) {
    return res.status(400).json({
      ok: false,
      message: "Passwords do not match"
    })
  }

  USERS.push({ name, email, password })
  console.log("Current Users:", USERS)

  return res.json({
    ok: true,
    message: "User registered successfully"
  })
})




/* Login API (NOTE: just verifying email and password from fakeDB, for now) */
app.post("/api/login", (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ ok: false, message: "Email and password are required" })
    }

    const user = USERS.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ ok: false, message: "Invalid credentials" })
    }

    return res.json({ ok: true, message: "Logging in…" })

})



/* ChatBot system using OpenAI API  */

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ ok: false, message: "Message is required"})
    }
    if (message.length > 500) {
      return res.status(400).json({ ok: false, message: "Message too long"})
    }
    

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content: "You are Sophos, a helpful assistant. Be concise, friendly, and practical. Answer in short steps. Never reveal secrets or keys. Text always in English."
        },
        {role: "user", content: message },
        
        
      ],

      max_output_tokens: 200,
      temperature: 0.7,

      //max_output_tokens keep tokens below 200
      //temperature: change the i.a responses for more creative or less if lower 
    })

    const reply = response.output_text
    return res.json({ ok: true, reply})

  } catch (error) {
    console.error("Chat ERROR:", error)
    return res.status(500).json({ 
      ok: false, 
      message: "Chat Request Failed",
      details: error?.message || "Unknown error",
      
    })
  }
})


//temporary just to check if is true or false
console.log("OPENAI_API_KEY exists?", Boolean(process.env.OPENAI_API_KEY));


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  
});