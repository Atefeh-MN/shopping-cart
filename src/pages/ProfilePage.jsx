import { useAuth } from "../context/provider/AuthProvider";

const Profilepage = () => {
    const userData = useAuth();
    return (<div>
            {userData ? <div >  <p> your Name : {userData.name}</p>
            <p>your email: {userData.email}</p>
            <p> your  phonenumber :{userData.phoneNumber}</p></div>:''}
     
    </div > );
}
 
export default Profilepage;