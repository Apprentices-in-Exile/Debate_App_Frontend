import CreateDebateForm from '../../components/CreateDebateForm/CreateDebateForm'
import {useState} from 'react'
import { Button } from '@material-tailwind/react'
import { useEffect } from 'react'
import ConversationTile from '../../components/ConversationTile/ConversationTile'

export interface Persona {
  id: string
  name: string
  description: string
  imageURL: string
}

const FeedPage = (): JSX.Element => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [response, setResponse] = useState<string>('')
  const [createDebate, setCreateDebate] = useState<boolean>(false)

  useEffect(() => {
    // Connect to the WebSocket server
    const ws = new WebSocket(
      'wss://a0ppckpw77.execute-api.us-east-2.amazonaws.com/development'
    )

    // Set up event listeners for WebSocket events
    ws.onopen = () => {
      console.log('WebSocket connection established.')
      setSocket(ws)
    }

    ws.onmessage = (event) => {
      const message = event.data
      console.log('Received message:', message)
      setResponse((prevResponse) => prevResponse + event.data.toString())
      // Handle the received message as needed
    }

    ws.onclose = () => {
      console.log('WebSocket connection closed.')
      setSocket(null)
    }

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (socket) {
        socket.close()
      }
    }
  }, [])

  const sendMessage = (
    topic: string | null,
    persona1: Persona | null,
    persona2: Persona | null
  ) => {
    const persona1string = `${persona1?.name}, who is ${persona1?.description}`
    const persona2string = `${persona2?.name}, who is ${persona2?.description}`
    const message = {
      action: 'conversation',
      message: [topic, persona1string, persona2string]
    }
    if (socket) {
      socket.send(JSON.stringify(message))
    } else {
      console.log('WebSocket connection not established.')
    }
  }
  
  function handleClick (){
    setCreateDebate((prevCreateDebate) => !prevCreateDebate)
  }

  return (

    <div className="flex justify-center">
      {!createDebate && <Button onClick={()=> handleClick()}>New Debate</Button>}
      {createDebate && <CreateDebateForm  change={handleClick} sendMessage={sendMessage}/>}      
      {/* {!createDebate && response.length>0 &&  */}
      <ConversationTile text={response}></ConversationTile>
      {/* } */}
   </div>
  )
}

export default FeedPage
