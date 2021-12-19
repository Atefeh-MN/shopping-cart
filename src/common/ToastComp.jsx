import { Link } from "react-router-dom";
import'./toast.css'


const ToastComp = ({ error, success }) => {
    

    if (success) {
        return (<div className="toastContainer">
            
            <p style={{ color: 'green' }}>Your account has been successfully created!</p>
        
        </div>);
   
    } else {
        return (<div className="toastContainer">{error && <p style={{ color: 'red' }}>{error}</p>}</div>)
    }
}
 
export default ToastComp;