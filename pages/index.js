import TemplateDefault from '../src/templates/Default';
import { Container } from '@material-ui/core';
import apiEstufa from './api/apiEstufa';
import { useState } from 'react';
import React, { Component } from 'react';


export default function Home() {
    const [estufas, setEstufas] = useState([]);
    const [loading, setLoading] = useState(true);


  return (
    <TemplateDefault maxWidth='sm'>

          <ul>
              {estufas.map}
          </ul>

    </TemplateDefault>
  )
    }