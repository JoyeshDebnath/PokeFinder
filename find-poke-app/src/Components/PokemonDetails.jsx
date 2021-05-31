import React from 'react'
import { Grid,Avatar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({

    
    headerStyles:
    {
        textAlign: 'center',height:"80px",fontSize:"70px",backgroundColor:"#8896AB"
    },
    infoStyle: {
       margin:"auto",
        textAlign: 'center'
    },
    btnStyle: {
        padding: "60px",
        
    },
    textStyle: {
        fontWeight: "600",
        fontSize: "50px"
    },
    avatarStyle: {
        height:"120px",
        width:"120px",
        backgroundColor:"#FFDDA1"
    }
})





const PokemonDetails = (props) => {

const { name, id, species, height, weight, types, sprites } = props.pok;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    console.log(props);
    const classes= useStyles();
                          const history = useHistory();

    return (
        <Grid container xs={12} direction="column"
            justify="center"
            alignItems="center"
            spacing={ 2}>
            <Grid container xs={12} sm={12} md={12} style={{backGround:"#8896AB"}}>

                <Grid item xs={12} sm={12} md={ 12} variant="h1" className={classes.headerStyles}>
                {name.toUpperCase()}
            </Grid>
            </Grid>
            
            
            <Grid item xs={12} sm={9} md={10}>
                <Typography xs={ 8} >
                    <img style={{maxWidth:"80vw"}}  src={fullImageUrl} alt="" />
                 </Typography>
            </Grid>
            <Grid item xs={10} sm={10} md={10}  className="classes.infoStyle">
                <Typography variant="h2" styles={{ textDecoration: "underline" }}>Pokemon Info:</Typography>
                <Typography className={classes.textStyle}>Avatar:
                     <Avatar className={ classes.avatarStyle} alt="pokemon avatar" src={ front_default} />
                </Typography>
               

                <Typography className={ classes.textStyle}>
          {"Species: "}
          {species.name} 
        </Typography>
        <Typography className={ classes.textStyle}>Height: {height} </Typography>
        <Typography className={ classes.textStyle}>Weight: {weight} </Typography>
        <Typography className={ classes.textStyle} variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography className={ classes.textStyle} key={name}> {`${name}`}</Typography>;
        })}
            </Grid>


            <Grid item style={{}}>
                 <Button className="classes.btnStyle"  variant="contained" onClick={()=>history.push('/')}>
            Back to PokeDash Board🐱‍🏍s
            </Button>
            </Grid>
           
        </Grid>
        
    )
}

export default PokemonDetails
