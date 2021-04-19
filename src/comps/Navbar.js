
import React,{useState} from 'react'
import { Button, Alert } from 'react-bootstrap';
import {useAuth} from "../contexts/AuthContext"
import {  useHistory } from 'react-router-dom';

export default function Navbar() {
    
    const [error, seterror] = useState("")
    const {currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        seterror('')

        try{
            await logout()
            history.push('/login')
        } catch {
            seterror('Failed to log out')
        }
    }

    return (
        <div>
        <nav className="navigation container">
            {/* <h1 className="title">InnovativeDEV</h1> */}
            <div className="title">
            <h1>FireGram</h1>
            </div>
            <ul className="list-non-bullet nav-pills">
                {/* <li className="list-item-inline">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li className="list-item-inline">
                    <Link className="link" to="/login">Log In</Link>
                </li>
                <li className="list-item-inline">
                    <Link className="link" to="/signup">Sign Up</Link>
                </li> */}
                <li className="list-item-inline">
                    <Button className="link" onClick={handleLogout}>Log Out</Button>
                </li>
            </ul>
        </nav>
        <div className="w-100 text-center mt-2">
            <strong >Email:</strong> {currentUser.email} 
            {/* <Button variant="link" onClick={handleLogout}>Log Out</Button> */}
        </div>
        {error && <Alert variant="danger" >{error}</Alert>  }
        {/* <strong >Email:</strong> {currentUser.email}  */}
        </div>
    )
}
