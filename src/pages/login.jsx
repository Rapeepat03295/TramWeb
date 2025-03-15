import "../pages/login.css"
import MapComponent from '../components/MapComponent';
import AdminLogin from '../components/adminLogin';
import Display from '../components/Display';
const Login = () => {
    console.log("in login page");
    return(
        <div className ="home-c">
            
            
            <AdminLogin/>
            <MapComponent/>

        </div>
    )
}

export default Login