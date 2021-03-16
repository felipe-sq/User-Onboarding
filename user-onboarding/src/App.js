import React, { useState, useEffect } from 'react'
import './App.css';
import * as yup from 'yup'
import axios from 'axios'

import { formSchema } from './formSchema'

import Form from './Form'
import User from './User'

const startingFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const startingFormErrors = {
  name: '',
  email: '',
  password: '',
}


const initialUsers =[]

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(startingFormValues)
  const [formErrors, setFormErrors] = useState(startingFormErrors)

// commented validation code due to errors //  
// useEffect(() => {
//   formSchema.isValid(formValues)
//   .then(valid => console.log(valid))
// }, [formValues])

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => console.log('is valid'))
      .catch(err => console.log(err.errors[0].message))
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
  }

  return (
    <div>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}  
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
