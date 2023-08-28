import CreateDebateForm from '../../components/CreateDebateForm/CreateDebateForm'
import { useState } from 'react'
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
  const [personas, setPersonas] = useState<Persona[] | null>([])
  const { messages, setMessages } = useWebSocket() ?? {}

  function handleClick (): void {
    setCreateDebate((prevCreateDebate) => !prevCreateDebate)
    if (setMessages != null) {
      setMessages([])
    }
  }
  function getPersona (index: number): Persona | undefined {
    if (personas != null) {
      if (index === 0 || index % 2 === 0) {
        return personas[1]
      } else {
        return personas[0]
      }
    }
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
      <div className='flex justify-center items-center content-center'>
        {createDebate && (
          <CreateDebateForm change={handleClick} setPersonas={setPersonas} />
        )}
        <div className='flex-col items-center flex-wrap'>
          {!createDebate &&
            (messages != null) &&
            messages.map((message, index) => {
              return (
                  <ConversationTile
                    text={message}
                    key={index}
                    persona={getPersona(index)}
                  ></ConversationTile>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default FeedPage
