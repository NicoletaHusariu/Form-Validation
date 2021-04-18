import React from "react";
import { Link } from "react-router-dom";
import './existentAccount.css'


const ExistentAccount = () => {
    return (
        <div className='wrapper'>
            <h1 className='message'>
                Good for you!
            </h1>
            <div className="btn">
                <Link to='/' className='link' ><span>Now go back</span></Link>
            </div>
        </div>
    )
}


export default ExistentAccount;