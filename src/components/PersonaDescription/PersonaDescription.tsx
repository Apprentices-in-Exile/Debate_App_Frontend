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
    <div className="flex items-center gap-4">
      <Avatar src={imageURL} alt="avatar" />
      <div>
        <Typography variant="lead">{name}</Typography>
        <Typography variant="small" color="gray" className="font-normal">{description}</Typography>
      </div>
    </div>
  )
}

export default PersonaDescription