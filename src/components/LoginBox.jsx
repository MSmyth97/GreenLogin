import React from 'react';
import logo from '../assets/logo-r.svg';

export const LoginBox = () => {
    return (
        <div id="box">
            <img id="logo" className="logo" src={logo} alt="Green Energy Logo"/>
            <div className='title-container'>
                <h1 className="title-text">Operations Studio</h1>
                <h3 className="title-subtitle">Please Enter Your Email Address Below</h3>
            </div>
            <div className='form-container'>
                <p className='form-title'>Email Address</p>
                <form>
                    <input type="text" id="email-input"/>
                    <input type="radio" id="remember-email"/>
                    <label for="remember-email">Remember This Device</label>
                </form>
                <button>Submit</button>
            </div>
        </div>
    );
}