import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid,Typography ,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonDetails from './PokemonDetails';

const useStyle = makeStyles({
    typographyStyle: {
        fontWeight: "800",
        width: "500px",
        margin: "auto",
        textAlign: "center",
        fontSize: "50px"
    }
,
    failImage: {

  borderRadius:"15px 50px 30px" ,
 
  padding:"20px",
  width:"300px" ,
  height: "20rem"

    }

})

const Pokemon = (props) => {
    const classes = useStyle();
    const { pok_id } = useParams();
    
    const [pokemonData, setPokemonData] = useState(undefined);


     useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pok_id}/`)
      .then(response=> {
        const { data } = response;
        setPokemonData(data);
      })
      .catch(function (error) {
        setPokemonData(false);
      });
  }, [pok_id]);

    

    return (
        <>
            {pokemonData === undefined && <CircularProgress color="secondary" style={{ marginTop: "20%", marginLeft: "50%" }} />}
            
            {pokemonData === false && <Typography className={classes.typographyStyle}>404 Error !! Pokemon Could not be Found !
            <img className={classes.failImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV57SJk4gfJwqp3G6FQ2qmufG9huxMTvF4w&usqp=CAU" alt="" />
            </Typography>}


            {pokemonData !== undefined && pokemonData && <PokemonDetails pok={ pokemonData}/>}
        
        
           
        </>
      
    )
}

export default Pokemon;
