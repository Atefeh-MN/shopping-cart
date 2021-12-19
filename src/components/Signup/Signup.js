import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '../../common/Input';
import RadioInput from '../../common/RadioInput';
import BooleanInput from '../../common/BooleanInput';
import './signup.css';
import { Link } from 'react-router-dom';

const initialValues = {
    name: '',
    email: '',
    phoneNumber: "",
    password: "",
    passwordConfirm: '',
    gender: '',
    terms: false,
}

const SingupForm = () => {

    const radioOtion = [{ label: 'Male', value: '0' },
    { label: 'Female', value: '1' }];
   
    // useEffect(() => {
    //     axios.get('http://localhost:3001/users/1').then(res => setFormValues(res.data)).catch(err => err)
    // }, [])



    const onSubmit = (values) => {
        console.log(values)
        // axios.post('http://localhost:3001/users', values).then(res => console.log(res)).catch(err => console.log(err));
    }
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

    const formik = useFormik({ initialValues: initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize: true });

    return (
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
                <Link to='/login'>
                    <p style={{ marginTop: '15px' }}>Already login?</p>
                </Link>
            </form>


        </div>);
}

export default SingupForm;