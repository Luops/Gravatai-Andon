import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import { makeStyles } from "@material-ui/core/styles";
import { fontFamily } from '@mui/system';

const useStyles = makeStyles((theme) => ({

  containerHeader: {
    backgroundColor: "rgb(63,81,181)",
    padding: "1.25rem 0",
    color: "white",
    boxShadow: "0px 6px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
    
  },

  titulo: {
    fontSize: "1.65rem",
    fontWeight: "bold",
  }
  

}))


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.containerHeader}>
      <Typography className={classes.titulo}>
        Etapa de Secagem SE HP
      </Typography>
    </Box>
  );
}