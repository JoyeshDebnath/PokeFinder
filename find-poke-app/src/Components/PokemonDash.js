import React, { useState,useEffect} from 'react'
import { AppBar, Toolbar,Grid,TextField } from '@material-ui/core';
import { makeStyles,fade} from '@material-ui/core/styles'
import PokeCard from './PokeCard';
import ImageSearchRoundedIcon from '@material-ui/icons/ImageSearchRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';




const useStyles = makeStyles(theme => ({
    gridContainerStyle: {
        paddingLeft: "6rem",
        paddingRight: "4rem",
        paddingTop: "2rem",
        paddingBottom: "2rem"
    },
    searchBarStyle: {
        display: "flex",
        backgroundColor:fade(theme.palette.common.white,0.5)
    },
    searchIconStyle: {
        alignSelf: "flex-end",
        marginBottom:"5px"
    },
    textFieldStyle: {
        width: "300px",
        marginBottom:"5px"
    },
    logoStyle: {
        width: "5rem",
        height: "4.6rem",
        marginLeft:"3rem"
    }

}));



const PokemonDash = () => {
    
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState({});
    const [filter,setFilter]=useState("");

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`).then(response => {
           
            const { data } = response;
            const { results } = data;
            const myPokemonData = {};
            results.forEach((pokemon, index) => {
                myPokemonData[index + 1] = {
                    id: index + 1,
                    name:pokemon.name,
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                    artwork:`"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`
                }
            })

            setPokemonData(myPokemonData);
            //console.log(myPokemonData);
       })

    },[])
  

    const handleFilter = (event) => {
        setFilter(event.target.value);
    }//set the filter to the typed value

    return (
        <>
            <AppBar position="static" style={{backgroundColor:"#3D5467"}}>
                  <Toolbar>
                    <div className={classes.searchBarStyle}>

                        <ImageSearchRoundedIcon className={classes.searchIconStyle}/>
                        <TextField
                            label="enter Pokemon"
                            variant="standard"
                            className={classes.textFieldStyle}
                            onChange={handleFilter}
                        />
                    </div>

                    
                        <img className={classes.logoStyle} src="https://image.flaticon.com/icons/png/512/188/188987.png" alt="" />
                    
                  </Toolbar>
            </AppBar>
            {pokemonData ? (
                
                 <Grid container sm={12} xs={12} md={12} spacing={8} className={ classes.gridContainerStyle}>

                    {Object.keys(pokemonData).map((pokemon_id) => {
return pokemonData[pokemon_id].name.includes(filter) && <PokeCard pok={ pokemonData[pokemon_id]} key={pokemonData[pokemon_id].id}/>
               })}     
               </Grid>
            ) : <CircularProgress color="secondary" style={{marginTop:"20%",marginLeft:"40%"}}/>}

           

            </>
    )
}

export default PokemonDash;

