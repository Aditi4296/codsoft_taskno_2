import React, { useContext, useState } from "react"
import "./register.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Register = () => {
    const [ credentials, setCredentials ] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
    })
    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setCredentials((prev) =>  ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:8800/api/auth/register", credentials);
            navigate("/login")

        }catch(err){
            dispatch({type:"LOGIN_FAILED", payload: err.response.data})
        }
    };

    
    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
                <input type="email" placeholder="email" id="email" onChange={handleChange} className="lInput" />
                <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
                <button disabled={loading} onClick={handleClick} className="lButton">Register</button>
                { error && <span>{error.message}</span> }
            </div>
            <span className="reg">Already have an account ? <Link to="/login" className="regbutton">Login</Link></span>
        </div>
    )
}

export default Register