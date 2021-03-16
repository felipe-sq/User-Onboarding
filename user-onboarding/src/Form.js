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
    }

    return (
        /* code goes here*/
        <div className="form container">
            <div className="form-group submit">
                <h2>User Onboarding Form!</h2>
                <button>submit</button>

        {/* code placeholder for errors? */}
        <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
        </div>


        <div className="form-group inputs">
            <h4>Essential Details</h4>
            <label>Name
                <input 
                   value="Name"
                   name="name"
                   type="text"
                />
            </label>

            <label>Email
                <input 
                    value="Email"
                    name="email"
                    type="text"
                />
            </label>

            <label>Password
                <input 
                    value="Password"
                    name="password"
                    type="text"
                />
            </label>

        <div className="form-group checkboxes">
            <h4>Terms of Service</h4>
            <label>Please accept the Terms of Service. This is a required step in the user onboarding process!
                <input name="terms" type="checkbox" />
            </label>
        </div>

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