import { Avatar, Typography } from "@material-tailwind/react";

interface PersonaSummaryProps {
  persona: {
    imageURL: string,
    name: string,
  }
}

function PersonaSummary({ persona }: PersonaSummaryProps ){
  return (
    <>
      {/* <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>
            h1. Heading
        </Typography>
        </Box> */}
    <Avatar src={persona.imageURL} alt={`${persona.name} avatar`} />
    </>
  )
}

export default PersonaSummary
