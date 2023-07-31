import CreateDebateForm from '../../components/CreateDebateForm/CreateDebateForm'
import { useState, useEffect } from 'react'
import { Button } from '@material-tailwind/react'
import ConversationTile from '../../components/ConversationTile/ConversationTile'
import { useWebSocket } from '../../contexts/WebSocketContext'
export interface Persona {
  id: string
  name: string
  description: string
  imageURL: string
}

const FeedPage = (): JSX.Element => {
  const [createDebate, setCreateDebate] = useState<boolean>(false)

  const { messages } = useWebSocket() || {}

  function handleClick() {
    setCreateDebate((prevCreateDebate) => !prevCreateDebate)
  }

  return (
    <div>
      {!createDebate && (
        <Button
          onClick={() => {
            handleClick()
          }}
        >
          New Debate
        </Button>
      )}
      <div className='flex justify-center'>
        {createDebate && <CreateDebateForm change={handleClick} />}
        <div className='max-w-300'>
          {!createDebate &&
            messages &&
            messages.map((message, index) => {
              return <ConversationTile text={message} key={index}></ConversationTile>
            })}
        </div>
        {/* <div className='flex justify-center text-white'>
          {messages ? messages.join("") : "No messages yet."}
        </div> */}
      </div>
    </div>
  )
}

export default FeedPage
