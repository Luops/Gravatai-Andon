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
        width: "100%",
    },
    container: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: "space-evenly",
        padding: "0rem 1rem",
        width: "100%",
    },
    gridEstufa: {
       border: "2px solid #000",
       borderRadius: "10px",
       marginTop: "4rem",
       display: "inline-block",
       textAlign: "center"
    },
    txtNome: {
        fontWeight: "bold"
    },
    txtProduto: {
        fontWeight: "bold",
        marginTop: "0.5em",
    },
    txtOP: {
        fontWeight: "900",
        marginTop: "0.5em",
    },
    divTempExaus: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-evenly",
        marginTop:"0.5em",
        
      },
    boxTemp: {
        display:"flex",
        padding: "10% 2%",
        border: "1px solid #000",
        borderRadius: "5px",
        backgroundColor:"#E8E8E8",
        justifyContent: "center",
    },
    boxExaus: {
        display:"flex",
        padding: "10% 2%",
        border:"1px solid #000",
        borderRadius: "5px",
        backgroundColor:"#E8E8E8",
        justifyContent: "center",
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
        fontWeight:"900",
        fontSize:"1.5em",
        marginRight:"0.5em",
    },
    apiConfigTemp:{
        fontWeight:"400",
        fontSize:"1.5em",
    },
        }))

export default function Estufas() {
    const classes = useStyles();

    //Armazenar os dados das estufas
  const [Estufas, setEstufas] = useState([]);

  useEffect(() => {
    //Carregar os dados das estufas
    //setInterval se refere a uma atualização a cada 1 segundo (1000 milisegundos)
    
    setInterval(() => {
    axios.get('http://localhost:5000/estufas')
    .then((response) => {
      setEstufas(response.data);
    })

    .catch(err => {
      console.log(err);})
    }, 10000);
}, [] );
    


    return (
    <TemplateDefault maxWidth='md' className={classes.containerGeral}>
        <Grid container className={classes.container}>
        {Estufas.map((estufa, key) => {
        return(
            <Grid item lg={2} md={4} sm={6} xs={12} className={classes.gridEstufa} key={key} id="gridEstufa">
                <Typography variant="h3" component="h1" className={classes.txtNome}>
                   {estufa.nome}
                </Typography>
                <div direction='column'className={classes.divInfos}>
                    <Typography variant="h3" component="h3" className={classes.txtProduto}>
                        Produto:
                   </Typography>
                   <Typography variant="h4" component="h3" key={key}>
                        {estufa.produto}
                   </Typography>
                   <Typography variant="h5" component="h3" className={classes.txtOP}>
                        Ordem de Produção:
                   </Typography>
                   <Typography variant="h4" component="h3" key={key}>
                        {estufa.ordem_producao}
                   </Typography>
                   <div direction="row" className={classes.divTempExaus}>
                       <Box className={classes.boxTemp}>
                           <Typography variant="h4" component="h3" key={key}>
                                {estufa.temperatura_estufa_lida}°C
                           </Typography>
                           <DeviceThermostatIcon fontSize="large"/>
                       </Box>
                       <Box className={classes.boxExaus}>
                           <Typography variant="h4" component="h3" key={key}>
                                {estufa.velocidade_exaustor_lida}
                           </Typography>
                           <HeatPumpIcon fontSize="large"/>
                       </Box>
                   </div>
                   <div direction="column" className={classes.divConfig}>
                        <Typography variant="h5" component="h3" className={classes.txtConfig}>
                            Configuração:
                        </Typography>
                        <ul>
                            <li>
                                <div className={classes.divConfigTemp}>
                                    <Typography variant="h5" component="h3" className={classes.txtConfigTemp}>
                                      Temperatura:
                                    </Typography>
                                    <Typography variant="h5" component="h3" key={key} className={classes.apiConfigTemp}>
                                      {estufa.temperatura_estufa_regulada}°C
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div className={classes.divConfigTemp}>
                                    <Typography variant="h5" component="h3" className={classes.txtConfigTemp}>
                                      Receita:
                                    </Typography>
                                    <Typography variant="h5" component="h3" key={key} className={classes.apiConfigTemp}>
                                      {estufa.receita}
                                    </Typography>
                                </div>
                            </li>
                            <li>
                                <div className={classes.divConfigTemp}>
                                    <Typography variant="h5" component="h3" className={classes.txtConfigTemp}>
                                      Fan:
                                    </Typography>
                                    <Typography variant="h5" component="h3" key={key} className={classes.apiConfigTemp}>
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
        </Grid>
        </TemplateDefault> 
    )
}



