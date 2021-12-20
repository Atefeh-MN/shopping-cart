import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../common/Input';
import './login.css';
import { useState,useEffect } from 'react';
import { LoginUser } from '../../services/Loginservice';
import ToastComp from '../../common/ToastComp';
import { useAuthActions,useAuth } from '../../context/provider/AuthProvider';
import { useQuery } from '../../hooks/useQueryParams';
import { withRouter } from 'react-router-dom';

const initialValues = {
    email: '',
    password: "",
};
const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const LoginForm = ({history}) => {
//    const [searchParams] = useSearchParams();
//    const redirect = searchParams.get('redirect') || '/';
    // console.log(redirect('/',1))
    // const query = useQuery();
    // let redirect=query.get('redirect')
    // const location = useLocation()
    // const redirect = location.search.split('=', 2)[1] 
    const query = useQuery();
    const redirect = query.get("redirect") || "/";
    const setAuth = useAuthActions();
    // let navigate = useNavigate();
    const [error, setError] = useState(null);
    const auth = useAuth();
    useEffect(({history}) => {
        if (auth) history.push(redirect);
    }, [redirect, auth])
    const onSubmit = async (values) => {

        try {
            const { data } = await LoginUser(values);
            setAuth(data);
            history.push(redirect);
            setError(null)
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message)
            }
        }
    }

  
    const formik = useFormik({ initialValues: initialValues, onSubmit, validationSchema, validateOnMount: true, enableReinitialize: true });

    return (
        <div className='loginContainer'>
            <div className='titleLog'>
                <h2>Login</h2>
            </div>
            <div className='formContainer'>
           
                <form onSubmit={formik.handleSubmit}>
                    
                    <Input formik={formik} label='Email' name='email' type='email' />
                    <Input formik={formik} label='Password' name='password' type='password' />
                    <button className='btn primary' style={{ width: '100%' }} type='submit' disabled={!formik.isValid}>Log In</button>
                    <ToastComp error={error} />
                    <Link to={`/signup?redirect=${redirect}`} >
                        <p style={{ margin: '3px' }}>Don't have an account?
                            <span style={{ color: '#0d9488' }}>Sign up</span>
                        </p>
                    </Link>
              
                </form>
            </div>
        </div>)
}
 
export default withRouter(LoginForm);