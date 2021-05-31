import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import CardMedia from '@material-ui/core/CardMedia';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const MarvelCard = (props) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}></span>;
    const { avatar_src,title,description,image_src,sub_header} = props;
    return (
      <Card className={classes.root} variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar_src} className={classes.avatar} />
          }
          action={
            <IconButton aria-label="settings">
              <ShareRoundedIcon />
            </IconButton>
          }
          title={title}
          subheader={ sub_header}
        />
        <CardMedia
        style={{height:"160px"}}
          image={ image_src}

      />

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          special power:
        </Typography>
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          IRONMAN🏍
        </Typography>
        <Typography variant="body2" component="p">
            {description }
          <br />
          {'"With great power comes great responsibility "'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}

export default MarvelCard
