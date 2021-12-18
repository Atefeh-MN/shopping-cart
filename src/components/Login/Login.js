import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../common/Input';
import './login.css'

const initialValues = {
    email: '',
    password: "",
}

const LoginForm = () => {
    const onSubmit = (values) => {
        console.log(values)
        // axios.post('http://localhost:3001/users', values).then(res => console.log(res)).catch(err => console.log(err));
    }
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
    const formik = useFormik({ initialValues: initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize: true });

    return (
        <div className='formContainer'>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label='Email' name='email' type='email' />
                <Input formik={formik} label='Password' name='password'type='password' />
                <button className='btn primary' style={{ width: '100%' }} type='submit' disabled={!formik.isValid}>Log In</button>
                <Link to='/signup'>
                    <p style={{marginTop:'15px'}}>Not signup yet?</p>
                </Link>
            </form>


        </div>);
}
 
export default LoginForm;