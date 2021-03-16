import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is a required field'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .required()
        .min(6, 'Password must be at least 6 characters'),
    terms: yup.boolean(),
})