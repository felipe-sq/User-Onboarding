import React, { useState, useEffect } from 'react'
import './App.css';
import * as yup from 'yup'
import axios from 'axios'

import { formSchema } from './formSchema'

import Form from './Form'


function App() {


useEffect(() => {
  formSchema.isValid(formValues)
  .then(valid => console.log(valid))
}, [formValues])

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
