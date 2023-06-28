import { Avatar, Textarea, Typography } from "@material-tailwind/react";

interface PersonaDescriptionProps {
  persona: {
    imageURL: string,
    name: string,
    description: string,
  }
}

function PersonaDescription({ persona }: PersonaDescriptionProps) {
  const { name, imageURL, description } = persona
  return (
    <>
      <Avatar src={imageURL} alt="avatar" />
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="small" color="gray" className="font-normal">{description}</Typography>
      </div>
    </>
  )
}

export default PersonaDescription
