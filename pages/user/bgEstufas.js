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
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import HeatPumpIcon from '@mui/icons-material/HeatPump';

const useStyles = makeStyles((theme) => ({
    
    containerGeral: {
    },
    container: {
        width: "100%",
        display: "wrap",
        alignContent: "center",
    },
    gridEstufa: {
       padding: "0.2em",
       border: "2px solid #000",
       borderRadius: "5px",
       width: "20%",
       margin: "1em",
       marginTop: "4em",
       marginLeft: "3em",
       display: "inline-block",
       textAlign: "center",
    },
    txtProduto: {
        fontWeight: "bold",
        marginTop: "0.5em",
    },
    txtOP: {
        fontWeight: "bold",
        marginTop: "0.5em",
    },
    divTempExaus: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-Between",
        marginTop:"0.5em",
        marginLeft:"0.5em",
        marginRight:"0.5em",
    },
    boxTemp: {
        display:"flex",
        padding: "1em",
        width:"45%",
        border: "1px solid #000",
        borderRadius: "5px",
        backgroundColor:"#E8E8E8",
    },
    boxExaus: {
        display:"flex",
        padding:"1em",
        marginLeft:"2em",
        width:"45%",
        border:"1px solid #000",
        borderRadius: "5px",
        backgroundColor:"#E8E8E8",
    },
    divConfig: {
        marginTop:"1em",
        marginLeft:"0.5em",
        textAlign:"left",
    },
    divConfigTemp: {
        display:"flex",
    },
    txtConfigTemp:{
        fontWeight:"400",
        fontSize:"1.2em",
        marginRight:"0.5em",
    },
    apiConfigTemp:{
        fontWeight:"400",
        fontSize:"1.2em",
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
                <div direction='column'className={classes.divInfos}>
                    <Typography variant="h5" component="h3" className={classes.txtProduto}>
                        Produto:
                   </Typography>
                   <Typography variant="h6" component="h3" key={key}>
                        {estufa.produto}
                   </Typography>
                   <Typography variant="h5" component="h3" className={classes.txtOP}>
                        Ordem de Produção:
                   </Typography>
                   <Typography variant="h6" component="h3" key={key}>
                        {estufa.ordem_producao}
                   </Typography>
                   <div direction="row" className={classes.divTempExaus}>
                       <Box className={classes.boxTemp}>
                           <Typography variant="h5" component="h3" key={key}>
                                {estufa.temperatura_estufa_lida}°C
                           </Typography>
                           <DeviceThermostatIcon fontSize="large"/>
                       </Box>
                       <Box className={classes.boxExaus}>
                           <Typography variant="h5" component="h3" key={key}>
                                {estufa.velocidade_exaustor_lida}
                           </Typography>
                           <HeatPumpIcon fontSize="large"/>
                       </Box>
                   </div>
                   <div direction="column" className={classes.divConfig}>
                        <Typography className={classes.txtConfig}>
                            Configuração:
                        </Typography>
                        <ul>
                            <li>
                                <div className={classes.divConfigTemp}>
                                    <Typography variant="h6" component="h3" className={classes.txtConfigTemp}>
                                      Temperatura:
                                    </Typography>
                                    <Typography variant="h6" component="h3" key={key} className={classes.apiConfigTemp}>
                                      {estufa.temperatura_estufa_regulada}°C
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div className={classes.divConfigTemp}>
                                    <Typography variant="h6" component="h3" className={classes.txtConfigTemp}>
                                      Receita:
                                    </Typography>
                                    <Typography variant="h6" component="h3" key={key} className={classes.apiConfigTemp}>
                                      {estufa.receita}
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div className={classes.divConfigTemp}>
                                    <Typography variant="h6" component="h3" className={classes.txtConfigTemp}>
                                      Fan:
                                    </Typography>
                                    <Typography variant="h6" component="h3" key={key} className={classes.apiConfigTemp}>
                                      {estufa.velocidade_exaustor_regulada}
                                    </Typography>
                                </div>
                            </li>
                        </ul>
                   </div>
                </div>
            </Grid>
        
        ) }
      
    )
        }
        </Container>
        </TemplateDefault> 
    )
}



