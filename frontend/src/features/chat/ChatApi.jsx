import { API_URL } from "@/config/api";

export async function sendMessage(message) {
    const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ message }),
    })

    const data = await res.json()

    if (!data.ok){
        throw new Error(data.message)
    }

    return data.reply
}