import TemplateDefault from '../src/templates/Default';
import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import axios from 'axios';


export default function Home() {
  //Armazenar os dados das estufas
  const [estufas, setEstufas] = useState([]);

  useEffect(() => {
    //Carregar os dados das estufas
    //setInterval se refere a uma atualização a cada 10 segundos (10000 milisegundos)
    setInterval(() => {

    axios.get('http://localhost:4000/estufas')
    .then((response) => {
      setEstufas(response.data);
    })

    .catch(err => {
      console.log(err);})
    }, 10000);
}, [] );

  return (
    <TemplateDefault maxWidth='sm'>
      {}

    </TemplateDefault>
  )
    }

    
