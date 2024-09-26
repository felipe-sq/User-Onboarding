import * as yup from 'yup'

export const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required')
        .min(2, 'First name requires at least 2 characters'),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required')
        .min(2, "Last name requires at least 2 characters"),
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .required()
        .min(6, "Minimum 6 characters required for password"),
    yes: yup.boolean().required(),
    // no: yup.boolean(),
})

export default formSchema