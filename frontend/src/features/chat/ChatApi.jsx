export async function sendMessage(message) {
    const res = await fetch("http://localhost:3000/api/chat", {
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