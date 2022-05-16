import react from "react";
import { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import { 
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions } from "@material-ui/core";
import TemplateDefault from '../../src/templates/Default';
import { makeStyles } from "@material-ui/core/styles";
import { border, display, flexbox, fontSize, fontWeight, padding } from "@mui/system";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    
    containerGeral: {
    },
    container: {
        width: "100%",
        display: "wrap",
        alignContent: "center",
    },
    gridEstufa: {
       padding: "1em",
       border: "1px solid #ccc",
       borderRadius: "5px",
       width: "15%",
       margin: "1em",
       marginLeft: "5em",
       display: "inline-block",
       textAlign: "center",
    },
        }))

export default function estufas() {
    const classes = useStyles();

    //Armazenar os dados das estufas
  const [estufas, setEstufas] = useState([]);

  useEffect(() => {
    //Carregar os dados das estufas
    //setInterval se refere a uma atualização a cada 1 segundo (1000 milisegundos)
    
    setInterval(() => {
    axios.get('http://localhost:4000/estufas')
    .then((response) => {
      setEstufas(response.data);
    })

    .catch(err => {
      console.log(err);})
    }, 1000);
}, [] );
    


    return (
    <TemplateDefault maxWidth='md' className={classes.containerGeral}>
        <Container className={classes.container}>
        {estufas.map((estufa, key) => {
        return(
            <Grid className={classes.gridEstufa} key={key} >
                <Typography variant="h3" component="h1" >
                   {estufa.nome}
                </Typography>
                <div direction='column'>
                    <Typography variant="h5" component="h3">
                        Produto:
                   </Typography>
                   <Typography variant="h6" component="h3" key={key}>
                        {estufa.produto}
                   </Typography>
                   <Typography variant="h6" component="h3" key={key}>
                        {estufa.velocidade_exaustor_lida}
                        RPM
                   </Typography>
                </div>
            </Grid>
        
        ) }
      
    )
        }
        </Container>
        </TemplateDefault> 
    )
}



