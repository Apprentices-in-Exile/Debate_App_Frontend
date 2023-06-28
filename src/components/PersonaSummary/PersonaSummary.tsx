import { Avatar, Textarea, Typography } from "@material-tailwind/react";

interface PersonaSummaryProps {
  persona: {
    imageURL: string,
    name: string,
    description: string,
  }
}

function PersonaSummary({ persona }: PersonaSummaryProps) {
  const { name, imageURL, description } = persona
  return (
    <div className="flex items-center gap-4">
      <Avatar src={imageURL} alt="avatar" />
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="small" color="gray" className="font-normal">{description}</Typography>
      </div>
    </div>
  )
}

export default PersonaSummary
