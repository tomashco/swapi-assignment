import { Typography } from "@mui/material";

interface TitleProps {
  title: string
}

export default function Title({title}: TitleProps) {
  return <div className="flex justify-center">

    <Typography variant="h3">
       {title}
      </Typography>
    </div>
}