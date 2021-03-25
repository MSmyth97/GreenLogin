import React from 'react';
import logo from '../assets/logo-r.svg';

export const LoginModal = () => {
    return (
        <div id="box">
            <div className="logo-container">
                <img id="logo" className="logo" src={logo} alt="Green Energy Logo"/>
            </div>
            <div className='title-container'>
                <h1 className="title-text">Operations Studio</h1>
                <h2 className="title-subtitle">Please enter your email below</h2>
            </div>
            <div className='form-container'>
                <p className='form-title'>Email Address</p>
                <form id="log-in-form">
                    <input type="text" maxLength="50" id="email-input"/><br />
                    <input type="checkbox" className="checkbox"/>
                    <label for="checkbox">Remember This Device</label>
                </form>
            </div>
            <button className="sign-in-button" form="log-in-form">Sign In</button>
        </div>
    );
}