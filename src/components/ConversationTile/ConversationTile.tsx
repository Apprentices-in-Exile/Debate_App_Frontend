import { Avatar, Typography } from '@material-tailwind/react'

interface ConversationTileProps {
  persona?: {
    imageURL: string
    name: string
    description: string
  }
  text: string
}

function ConversationTile ({
  persona,
  text
}: ConversationTileProps): JSX.Element {
  const { name, imageURL } = persona ?? { name: '', imageURL: '' }

  return (
    <div className='flex items-center gap-4 py-2 px-20 w-2/3'>
      <div className='w-52'>
        <Avatar src={imageURL} alt='avatar' size='md' />
      </div>
      <div>
        {
          <Typography variant='lead' color='white'>
            {name}
          </Typography>
        }
        <Typography
          variant='small'
          color='white'
          className='font-normal max-w-300 min-w-300'
        >
          {text}
        </Typography>
      </div>
    </div>
  )
}

export default ConversationTile
