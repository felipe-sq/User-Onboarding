import * as yup from 'yup'

export const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name is required'),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required'),
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .required()
        .min(6, "Minimum 6 characters required"),
    terms: yup.boolean(),
})

export default formSchema