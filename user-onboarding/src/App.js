import React, { useState, useEffect } from 'react'
import './App.css';
import * as yup from 'yup'
import axios from 'axios'

// error with yup -- attempted import error: 'required' is not exported from 'yup' (imported as 'yup')

import formSchema from './validation/formSchema'

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
  terms: '',
}

const initialUsers =[]
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(startingFormValues)
  const [formErrors, setFormErrors] = useState(startingFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(({data}) => setUsers(data))
    .catch(err => console.log(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(({data}) => {
      setUsers([...users, data])
      setFormValues(startingFormValues)
    .catch(err => console.log(err))
    })    
  }

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

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <header><h1>User Onboarding</h1></header>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
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
