import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BsGithub} from 'react-icons/bs'
// import ModalExampleModal from './ModelExampleModal';
// import Modal from './Modal';




export default function Academics(props) {



  return (
    <Card sx={{ }} className="academiccard">
    
      <CardMedia
        sx={{ height: 100 }}
        image={props.pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.degree}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {props.duration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <i>GPA : { props.gpa}</i>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
