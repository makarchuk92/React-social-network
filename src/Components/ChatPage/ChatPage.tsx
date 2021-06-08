import React, { useEffect, useState } from "react"
import { Button, message } from "antd"



const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    return (
        <div>
            <Messages />
            <AddMessageChatForm  />
        </div>

    )
}

const Messages: React.FC = () => {

    useEffect(() => {
        wsChanel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
        setMessage((prevMessages) => [...prevMessages, ...newMessages])    
        })
    }, [])

    const [messages, setMessage] = useState<ChatMessageType[]>([]) 
    return (
        <div style= {{height: "400px", overflowY: "auto"}}>
            {messages.map((m, index ) => <Message message= {m} key={index} />)}
        </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img src={message.photo} alt="logo" style={{width: "30px"}} /> <h2>{message.userName}</h2>
            {message.message}
            <hr/>
        </div>
        
    )
}

const AddMessageChatForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const sendMessage = () => {
        if(!message) {
            return
        }
        wsChanel.send(message)
        setMessage('')
    }
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <Button onClick={sendMessage} type="primary">send</Button>
            </div>
        </div>

    )
}

export default ChatPage