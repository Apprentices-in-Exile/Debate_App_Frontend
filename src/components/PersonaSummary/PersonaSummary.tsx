import { Avatar } from "@material-tailwind/react";

interface PersonaSummaryProps {
  persona: {
    imageURL: string,
    name: string,
  }
}

function PersonaSummary({ persona }: PersonaSummaryProps ){
  return (
    <>
      <Avatar src={persona.imageURL} alt={`${persona.name} avatar`} />
    </>
  )
}

export default PersonaSummary
