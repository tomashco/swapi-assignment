import { Typography } from "@mui/material";
import PropTypes from 'prop-types';

export default function Title({title}) {
  return <div className="flex justify-center">

    <Typography variant="h3">
       {title}
      </Typography>
    </div>
}

Title.propTypes = {
  title: PropTypes.string
}