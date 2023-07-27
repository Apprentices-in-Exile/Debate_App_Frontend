import { Avatar, Typography  } from "@material-tailwind/react";
import { useState } from 'react'


interface ConversationTileProps {
  persona?: {
    imageURL: string
    name: string
    description: string
  }
  text: string
}

function ConversationTile({
  persona,
  text
}: ConversationTileProps): JSX.Element {
//   const { name, imageURL, description } = persona

  return (
    // <div className='flex items-center gap-4 py-2 min-w-600'>
    //   <Avatar src={imageURL} alt='avatar' />
    //   <div>
    //     {(
    //       <Typography variant='lead' color='white'>
    //         {name}
    //       </Typography>
    //     )}
        <Typography variant='small' color='white' className='font-normal'>
          {text}
        </Typography>
    //   </div>
    // </div>
  )
}

export default ConversationTile
