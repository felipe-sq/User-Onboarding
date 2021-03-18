import React, { useState, useEffect } from 'react'
import './App.css';
// import './styles.less'

import * as yup from 'yup'
import axios from 'axios'

import formSchema from './validation/formSchema'

import Form from './Form'
import User from './User'

const startingFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  yes: false,
}

const startingFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  yes: '',
}

const initialUsers =[]
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(startingFormValues)
  const [formErrors, setFormErrors] = useState(startingFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users/')
    .then(res => 
      // console.log(res.data.data))
      setUsers(res.data.data))
    .catch(err => console.log(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(({data}) => {
      setUsers([data, ...users])
      setFormValues(startingFormValues)
    })
    .catch(err => console.log(err))    
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      yes: formValues.yes
    }
    postNewUser(newUser)
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
