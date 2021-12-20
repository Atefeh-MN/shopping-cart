import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '../../common/Input';
import RadioInput from '../../common/RadioInput';
import BooleanInput from '../../common/BooleanInput';
import './signup.css';
import { Link} from 'react-router-dom';
import { signupUser } from '../../services/SignupService';
import { useEffect, useState } from 'react';
import ToastComp from '../../common/ToastComp';
import { useAuth, useAuthActions } from '../../context/provider/AuthProvider';
import { useQuery } from '../../hooks/useQueryParams';
import { withRouter } from 'react-router-dom';



const initialValues = {
    name: '',
    email: '',
    phoneNumber: "",
    password: "",
    passwordConfirm: '',
    gender: '',
    terms: false,
};
const radioOtion = [{ label: 'Male', value: '0' },
{ label: 'Female', value: '1' }];
const validationSchema = yup.object({
    name: yup.string().required('Name is required').min(6, 'Must be more than 6 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: yup.string().required('phone Number is required').matches(/^[0-9]{11}$/, 'Must be type number and 11 characters'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    gender: yup.string().required('Select a gender is required'),
    terms: yup.boolean().required('You must accept the terms and conditions').oneOf([true], "You must accept the terms and conditions"),

});

const SingupForm = ({history}) => {
    const query = useQuery();
    const redirect = query.get("redirect") || "/";
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const setAuth = useAuthActions();
    const auth = useAuth();
    useEffect(() => {
        if (auth) history.push(redirect);
    },[redirect,auth])
    const onSubmit = async (values) => {
       
    const { name, password, email, phoneNumber } = values;
      const userData={
            name,email,password,phoneNumber
        }
        try {
            const { data } = await signupUser(userData);
            setAuth(data)
            history.push(redirect);
            setSuccess(true);
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message)
            }   
        }
    }


    const formik = useFormik({ initialValues: initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize: true });

    return (
        <div className='signContainer'>
            <div className='titleSign'>
                <h2>Sign up</h2> 
            </div>
        <div className='formContainer'>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label='Name' name='name' />
                <Input formik={formik} label='Email' name='email' type='email' />
                <Input formik={formik} label='Phone Number' name='phoneNumber' type='tel' />
                <Input formik={formik} label='Password' name='password' type='password' />
                <Input formik={formik} label='Password Confirmation' name='passwordConfirm' type='password' />
                <RadioInput formik={formik} radioOption={radioOtion} name='gender' />
                <BooleanInput formik={formik} name='terms' label='Terms and conditions' />
                <button className='btn primary' style={{ width: '100%' }} type='submit' disabled={!formik.isValid}>Register</button>
                <ToastComp error={error} success={success}/>
                    <Link to={`/login?redirect=${redirect}`}>
                    <p style={{ marginTop: '15px' }}>Already login?</p>
                </Link>
            </form>

         </div>
        </div>);
}

export default withRouter(SingupForm) ;