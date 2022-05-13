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
import { display, fontSize, fontWeight } from "@mui/system";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "100px",
    },
    gridEstufa: {
       
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
    <TemplateDefault maxWidth='md'>

        {estufas.map((estufa, key) => {
        return(
            <Container className={classes.container}>
            <Grid container spacing={1} className={classes.gridEstufa} direction='column'>
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
        </Container>
        ) }
      
    )
     
        }
        </TemplateDefault> 
    )
}



