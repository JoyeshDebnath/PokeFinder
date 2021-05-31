import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  cardMediaStyles: {
    height: "180px",
    width: "100px",
    margin: "auto"
    
  },
  cardContentStyle: {
    textAlign: "center",
    lineHeight: "10px",
    fontWeight: "800"
  },
  cardStyle: {
     backgroundColor: "#C5D5E4",
        boxShadow: "30px 23px 39px -2px rgba(20,19,23,0.75)",
        WebkitBoxShadow: "30px 23px 39px -2px rgba(20,19,23,0.75)",
        MozBoxShadow:" 30px 23px 39px -2px rgba(20,19,23,0.75)",cursor:"pointer"
  }


})


const PokeCard = (props) => {
  const pok= props.pok;
  const { name, id, artwork, sprite }=pok
  
  console.log(name,id,artwork,sprite);

  const history = useHistory();
  
  const classes = useStyles();
  
  const uppercaseHandler = (n) => {
    return n.toUpperCase();
  }

  return (
      
       <Grid item sm={4} md={3} xs={12} >
      <Card className={classes.cardStyle} onClick={()=>history.push(`/${id}`)}>
        
         <CardMedia className={ classes.cardMediaStyles}>
           
          <img src={ sprite} alt="" />
          </CardMedia>
        <CardContent className={ classes.cardContentStyle}>
          <Typography  style={{fontWeight:"800"}}>{id}. {uppercaseHandler(name)}  </Typography>
        </CardContent>
      </Card>
      </Grid>
    
  )
}

export default PokeCard


