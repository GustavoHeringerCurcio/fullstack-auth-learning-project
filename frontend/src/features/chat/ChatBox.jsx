import { useState } from "react";
import { sendMessage } from "./ChatApi";

import Maskot from "@/assets/maskot/Maskot-base.png"



export default function ChatBox() {
    const [text, setText] = useState("")
    const[messages, setMessages] = useState([
        { role: "assistant", content: "“Hi! I’m Sophos, a small chatbot built just to practice the OpenAI API and learn how things work. How can I help you?”" },
    ])

    const [loading, setLoading] = useState(false)

    async function handleSend(e) {

        //basic verification if is loading or if contain something
        e.preventDefault()
        if(!text.trim() || loading )return

        const userText = text;
        setText("")

        setMessages((prev) => [...prev, { role: "user", content: userText }])
        setLoading(true)

        try {
            const reply = await sendMessage(userText)
            setMessages((prev) => [...prev, { role:"assistant", content: reply }])
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, something went wrong"}
            ])
        } finally {
            setLoading(false)
        }
    }
        {/* ChatBot Principal Overflow Texts */}
    return (
        
        <div className="flex flex-col justify-center items-center p-8">
            <div className="w-full max-w-2xl h-[70vh] bg-white overflow-y-auto scrollbar-hide p-4">

                {/* Map, inside the ChatBot */}
                {messages.map((m, i) => {
                    
                    const isUser = m.role === "user"
                    
                    return ( 
                        <div key={i} className={`flex mb-4 ${isUser ? "justify-end " : "justify-start" }`}>
                            

                            <div className="flex flex-col" >

                                <div className="flex flex-row justify-center items-end gap-2">
                                    
                                    {!isUser &&
                                        <div className="w-10 h-10 rounded-2xl overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover scale-140 translate-y-1"
                                            src={Maskot}
                                            alt="Logo"
                                            />
                                        </div>}
                                        <div
                                        className={`p-3 rounded-2xl max-w-[80%] gap-4 drop-shadow-2xl 
                                            ${isUser 
                                            ? "bg-black text-white border border-gray-500 rounded-br-none" 
                                            : "bg-white border border-gray-300 text-black rounded-bl-none"}`}
                                            >
                                    
                                            {m.content}
                                        </div>

                                        {/* if is user create a image */} 
                                        {isUser && <div className="flex-shrink-0"> 
                                            <img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?img=8" alt="Logo" />
                                            </div>}
                                </div>

                                <div className={`flex flex-row text-sm  ${isUser 
                                    ? "justify-end mr-12" 
                                    : "justify-start ml-12"}`}
                                    >
                                    <p className=" p-1">10:32 AM</p>
                                </div>
                                
                            </div>
                        </div>
                    )
                    })}

                
            </div>
            <form onSubmit={handleSend} className="w-[60%]">
                    <div className="
                    flex items-center gap-2
                    px-3 py-2
                    bg-white
                    rounded-2xl
                    border border-gray-500
                    drop-shadow-xl
                    "
                    >
                        <input value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Ask anything"
                        className="
                        flex-1
                        bg-transparent
                        outline-none
                        text-black
                        placeholder-gray-900
                        "
                        />
                        <button
                        type="submit"
                        disabled={loading}
                        className="bg-black px-2 py-2 rounded-xl text-white font-medium disabled:opacity-50"
                        >
                            Send
                        </button>
                    </div>
                </form>
        </div>
    )

}