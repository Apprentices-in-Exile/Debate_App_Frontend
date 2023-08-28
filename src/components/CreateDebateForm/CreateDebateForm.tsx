import {
  Card,
  Button,
  Typography,
  Select,
  Option,
  Textarea
} from '@material-tailwind/react'
import type React from 'react'
import { useState } from 'react'
import { type Persona } from '../../pages/FeedPage/FeedPage'
import PersonaDescription from '../PersonaDescription/PersonaDescription'
import { useSendMessage } from '../../hooks/UseSendMessage'
interface CreateDebateFormProps {
  className?: string
  change: () => void
  setPersonas: React.Dispatch<React.SetStateAction<Persona[] | null>>
}

const data = [
  {
    id: '1',
    name: 'Peppa Pig',
    description: 'a lovable, but slightly bossy little pig.',
    imageURL:
      'https://static.wikia.nocookie.net/peppapig/images/6/61/Peppa_Pig.png'
  },
  {
    id: '2',
    name: 'Colonel Mustard',
    description: 'a dignified, dapper, and dangerous military man',
    imageURL:
      'https://static.wikia.nocookie.net/cluedo/images/f/f3/Colonel_Mustard.jpg'
  }
]
const roundValues = ['1', '2', '3', '5', '8']

const CreateDebateForm: React.FC<CreateDebateFormProps> = ({
  change,
  setPersonas
}: CreateDebateFormProps) => {
  const [persona1, setPersona] = useState<Persona | null>(null)
  const [persona2, setPersona2] = useState<Persona | null>(null)
  const [topic, setTopic] = useState<string | null>(null)
  const [setRounds] = useState<string | null>(null)
  const sendMessage = useSendMessage()

  return (
    <div>
      <Card
        color='transparent'
        shadow={false}
        className='my-10 py-10 px-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '
      >
        <Typography variant='h4' color='white'>
          Create New Debate
        </Typography>
        <form className='mt-8 mb-2 w-1/3 max-w-screen-lg sm:w-96'>
          <div className='mb-4 flex flex-col gap-6'>
            <Textarea
              label='Topic'
              onChange={(e) => {
                setTopic(e.target.value)
              }}
              labelProps={{ className: 'text-white' }}
              variant='static'
              color='orange'
            />
            <div className='py-2'>
              <Select
                label='Persona 1'
                className='text-white'
                labelProps={{ className: 'text-white' }}
                variant='static'
              >
                {data.map((persona) => {
                  return (
                    <Option
                      key={persona.id}
                      value={persona.id}
                      onClick={() => {
                        setPersona(persona)
                      }}
                    >
                      {persona?.name}
                    </Option>
                  )
                })}
              </Select>
              {(persona1 != null) && (
                <PersonaDescription persona={persona1} showName={false} />
              )}
            </div>
            <div className='py-2'>
              <Select
                label='Persona 2'
                className='text-white'
                labelProps={{ className: 'text-white' }}
                variant='static'
              >
                {data.map((persona) => {
                  return (
                    <Option
                      key={persona.id}
                      value={persona.id}
                      onClick={() => {
                        setPersona2(persona)
                      }}
                    >
                      {persona.name}
                    </Option>
                  )
                })}
              </Select>
              {(persona2 != null) && (
                <PersonaDescription persona={persona2} showName={false} />
              )}
            </div>
            <Button className='w-full bg-secondary my-4'>+ New Persona</Button>
            <Select
              label='Number of Rounds'
              className=''
              labelProps={{ className: 'text-white' }}
              variant='static'
            >
              {roundValues.map((number) => {
                return (
                  <Option
                    key={number}
                    value={number}
                    onClick={() => {
                      setRounds(number)
                    }}
                  >
                    {number}
                  </Option>
                )
              })}
            </Select>
          </div>

          <Button
            className='mt-6 bg-success'
            fullWidth
            onClick={() => {
              sendMessage(topic, persona1, persona2)
              change()
              if ((persona1 != null) && (persona2 != null)) {
                setPersonas([persona2, persona1])
              }
            }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default CreateDebateForm
