import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import OpenAI from "openai"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

//fake dataBase, NOTE: need to use MongoDB or SQL
const USER = {
    email: "admin",
    password: "admin",
}

/* to check backend status */
app.get("/health", (req, res) => {
  res.json({ ok: true, message: "Backend is running" });
});


/* Login API (NOTE: just verifying email and password from fakeDB, for now) */
app.post("/api/login", (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ ok: false, message: "Email and password are required" })
    }

    const isValid = email === USER.email && password === USER.password

    if (!isValid) {
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
          content: "You are Sophos, a helpful assistant. Be concise, friendly, and practical.Answer in short steps.Never reveal secrets or keys. Text always in English. Keep answers under 80 words."
        },
        {role: "user", content: message },
        
        
      ],

      max_output_tokens: 200,
      temperature: 0.7,

      //options:
      //temperature: 0.7,
    })

    const reply = response.output_text
    return res.json({ ok: true, reply})

  } catch (error) {
    return res.status(500).json({ 
      ok: false, 
      message: "Chat Request Failed",
      details: error?.message || "Unknown error",
      
    })
  }
})







app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});