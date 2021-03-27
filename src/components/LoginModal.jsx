import React from 'react';
import logo from '../assets/logo.svg';

export const LoginModal = () => {
    return (
        <div className="box">
            <div className="logo-container">
                <img id="logo" className="logo" src={logo} alt="Green Energy Logo"/>
            </div>
            <div className='title-container'>
                <h1 className="title-text">Operations Studio</h1>
                <h2 className="title-subtitle">Please enter your email below</h2>
            </div>
            <div className='form-container'>
                <p className='form-title'>Email Address</p>
                <form id="log-in-form" className="log-in-form">
                    <input type="text" maxLength="50" id="email-input" className="email-input" placeholder="Email"/><br />
                    <input type="checkbox" className="checkbox"/>
                    <label for="checkbox">Remember this device</label>
                </form>
            </div>
            <button className="sign-in-button">Sign In</button>
        </div>
    );
}