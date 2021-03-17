// import styled from 'styled-components'
// above code added for stretch goals
import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        /* code goes here */
        const { name, value, checked, type } = event.target
        console.log('name', name)
        console.log('value', value)
        console.log('checked', checked)
        console.log('type', type)

        const val = type === 'checkbox' ? checked : value 
        change(name, val)
    }

    return (
        <div className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Welcome to the User Onboarding Form!</h2>

        <div className="errors">
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>


        <div className="form-group inputs">
            <h4>Essential Details</h4>
            <label>First Name
                <input 
                   value={values.first_name}
                   onChange={onChange}
                   name="first_name"
                   type="text"
                />
            </label>

            <label>Last Name
                <input 
                   value={values.last_name}
                   onChange={onChange}
                   name="last_name"
                   type="text"
                />
            </label>

            <label>Email
                <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                />
            </label>

            <label>Password
                <input 
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                />
            </label>

        <div className="form-group checkboxes">
            <h4>Terms of Service</h4>
            <label>Please accept the Terms of Service. This is a required step in the user onboarding process!
                <input name="terms" type="checkbox" onChange={onChange} checked={values.terms}/>
            </label>
        </div>
        <button>submit</button>
                </div>
            </div>
        </div>
    )
}

// Code added for stretch goals
// const styledDiv = styled.div`
//     border: 1px solid rgb(210, 210, 210);
//     border-radius: 6px;
//     box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
//     margin: 16px 8px;
//     padding: 16px;
//     background-color: white;
// `;