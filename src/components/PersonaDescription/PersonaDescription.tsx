import { Avatar, Typography } from '@material-tailwind/react'

interface PersonaDescriptionProps {
  persona: {
    imageURL: string
    name: string
    description: string
  }
  showName: boolean
}

function PersonaDescription ({ persona, showName }: PersonaDescriptionProps): JSX.Element {
  const { name, imageURL, description } = persona

  return (
    <div className='flex items-center gap-4 py-2 min-w-600'>
      <Avatar src={imageURL} alt='avatar' />
      <div>
        {showName && <Typography variant='lead' color='white'>{name}</Typography>}
        <Typography variant='small' color='white' className='font-normal'>
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default PersonaDescription
