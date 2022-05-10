import TemplateDefault from '../src/templates/Default';
import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import axios from 'axios';


export default function Home() {
  //Armazenar os dados das estufas
  const [estufas, setEstufas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/estufas')
    .then((response) => {
      setEstufas(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <TemplateDefault maxWidth='sm'>

          <ul>
            {estufas.map((estufa, key) => {
              return (
                <li key={key}>
                  <h1>{estufa.nome}</h1>
                  <p>{estufa.ordem_producao}</p>
                </li>
              )
            }
              )}
          </ul>

    </TemplateDefault>
  )
    }

    
