export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type subscriberType = (messages: ChatMessageType[]) => void

let subscibers = [] as subscriberType[]

let ws: WebSocket | null = null;

const closeHandler = () => {
    console.log('Close WS')
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscibers.forEach(s => s(newMessages))
}

function createChannel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatApi = {
    start() {
        createChannel()
    },
    stop() {
        subscibers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
        ws?.close()
    },
    subscribe(callback: subscriberType) {
        subscibers.push(callback)
        return () => {
            subscibers = subscibers.filter(s => s !== callback)
        }
    },
    unSubscribe(callback: subscriberType) {
        subscibers = subscibers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}