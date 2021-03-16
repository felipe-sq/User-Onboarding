import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),
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