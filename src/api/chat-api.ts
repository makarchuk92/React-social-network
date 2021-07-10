export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type EventsNamesType = 'messages-received' | 'status-changed'

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChagedSubscriberType = (status: StatusType) => void

export type StatusType = 'pending' | 'ready' | 'error'

const subscibers =  {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as  StatusChagedSubscriberType[]
} 

let ws: WebSocket | null = null;

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscibers['messages-received'].forEach(s => s(newMessages))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE, PLEASE')
}
    

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscibers['status-changed'].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatApi = {
    start() {
        createChannel()
    },
    stop() {
        subscibers['messages-received'] = []
        subscibers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChagedSubscriberType) {
        // @ts-ignore
        subscibers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscibers[eventName] = subscibers[eventName].filter(s => s !== callback)
        }
    },
    unSubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChagedSubscriberType) {
        // @ts-ignore
        subscibers[eventName] = subscibers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}