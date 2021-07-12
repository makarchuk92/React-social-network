import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react"
import { Button } from "antd"
import { ChatMessageType } from "../../api/chat-api"
import { useDispatch, useSelector } from "react-redux"
import { sendMessage, startMessagesListening, stopMessagesListening } from "../../redux/chat-reducer"
import { AppStateType } from "../../redux/redux-store"





const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>

}

const Chat: React.FC = () => {

    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])




    return <div>
        {status === 'error' && <div>Please, refresh the page</div>}
        <>
            <Messages />
            <AddMessageChatForm />
        </>
    </div>
}

const Messages: React.FC<{}> = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'auto' })
        }
    }, [messages])


    return (
        <div style={{ height: "400px", overflowY: "auto" }} onScroll={scrollHandler} >
            {messages.map((m, index) => <Message message={m} key={m.id} />)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
    return (
        <div>
            <img src={message.photo} alt="logo" style={{ width: "30px" }} /> <h2>{message.userName}</h2>
            {message.message}
            <hr />
        </div>
    )
})

const AddMessageChatForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)



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
                <Button disabled={status !== 'ready'} onClick={sendMessageHamdler} type="primary">
                    send</Button>
            </div>
        </div>

    )
}

export default ChatPage



