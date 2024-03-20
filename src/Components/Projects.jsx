import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BsGithub} from 'react-icons/bs'
// import ModalExampleModal from './ModelExampleModal';
import Modal from './Modal';




export default function Projects(props) {



  return (
    <Card sx={{ }} className="projectcard">
    
      <CardMedia
        sx={{ height: 140 }}
        image={props.pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography> */}
      </CardContent>
      <CardActions>
      {/* {console.log('inside projects' +props.tech[0])} */}
       <Modal key = {props.id} title={props.title} description={props.description} path={props.path} tech = {props.tech}/>
      </CardActions>
    </Card>
  );
}
