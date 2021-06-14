import React, { useEffect, useState } from "react"
import { Button } from "antd"
import { ChatMessageType } from "../../api/chat-api"
import { useDispatch, useSelector } from "react-redux"
import { sendMessage, startMessagesListening, stopMessagesListening } from "../../redux/chat-reducer"
import { AppStateType } from "../../redux/redux-store"





const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])
   



    return (
        <div>
            <Messages  />
            <AddMessageChatForm  />
        </div>

    )
}

const Messages: React.FC<{ }> = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)

    return (
        <div style={{ height: "400px", overflowY: "auto" }}>
            {messages.map((m, index) => <Message message={m} key={index} />)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
    return (
        <div>
            <img src={message.photo} alt="logo" style={{ width: "30px" }} /> <h2>{message.userName}</h2>
            {message.message}
            <hr />
        </div>

    )
}

const AddMessageChatForm: React.FC<{ }> = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const dispatch = useDispatch()


    const sendMessageHamdler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <Button disabled={false} onClick={sendMessageHamdler} type="primary">
                    send</Button>
            </div>
        </div>

    )
}

export default ChatPage





// import React, { useEffect, useState } from "react"
// import { Button, message } from "antd"



// const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

// export type ChatMessageType = {
//     message: string
//     photo: string
//     userId: number
//     userName: string
// }

// const ChatPage: React.FC = () => {
//     return (
//         <div>
//             <Chat />
//         </div>
//     )
// }

// const Chat: React.FC = () => {
//     return (
//         <div>
//             <Messages />
//             <AddMessageChatForm  />
//         </div>

//     )
// }

// const Messages: React.FC = () => {

//     useEffect(() => {
//         wsChanel.addEventListener('message', (e: MessageEvent) => {
//             let newMessages = JSON.parse(e.data)
//         setMessage((prevMessages) => [...prevMessages, ...newMessages])    
//         })
//     }, [])

//     const [messages, setMessage] = useState<ChatMessageType[]>([]) 
//     return (
//         <div style= {{height: "400px", overflowY: "auto"}}>
//             {messages.map((m, index ) => <Message message= {m} key={index} />)}
//         </div>
//     )
// }

// const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
//     return (
//         <div>
//             <img src={message.photo} alt="logo" style={{width: "30px"}} /> <h2>{message.userName}</h2>
//             {message.message}
//             <hr/>
//         </div>

//     )
// }

// const AddMessageChatForm: React.FC = () => {
//     const [message, setMessage] = useState('')
//     const sendMessage = () => {
//         if(!message) {
//             return
//         }
//         wsChanel.send(message)
//         setMessage('')
//     }
//     return (
//         <div>
//             <div>
//                 <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
//             </div>
//             <div>
//                 <Button onClick={sendMessage} type="primary">send</Button>
//             </div>
//         </div>

//     )
// }

// export default ChatPage