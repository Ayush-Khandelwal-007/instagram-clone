import React, { useState } from 'react'
import './Forms.css'
import { Input } from '@material-ui/core'
import { auth } from '../../Firebase';

function SignUpForm({ dispatch1, dispatch2 }) {

    const [userinfo, setUserinfo] = useState({
        displayName: '',
        email: '',
        password: ''
    });

    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(userinfo.email, userinfo.password)
            .then((authUser) => {
                authUser.user.updateProfile(
                    {
                        displayName: userinfo.displayName,
                    }
                )
            })
            .catch((err) => { alert(err.message); })
        dispatch1();
    }

    const GoToSignIn = () => {
        dispatch1();
        dispatch2();
    }

    return (
        <div className="Sign_Up_Form">
            <form>
                <img
                    className="Sign_Up_Form_Logo"
                    src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"
                    alt="Logo"
                />
                <div>
                    <img
                        className="Sign_Up_Form_Name"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt="Instagram"
                    />
                </div>
                <div className="Sign_Up_Input_Fields">
                    <Input
                        className='input_field'
                        type="text"
                        placeholder="Display Name"
                        value={userinfo.displayName}
                        onChange={e => setUserinfo({ ...userinfo, displayName: e.target.value })}
                    />
                    <Input
                        className='input_field'
                        type="text"
                        placeholder="Email"
                        value={userinfo.email}
                        onChange={e => setUserinfo({ ...userinfo, email: e.target.value })}
                    />
                    <Input
                        className='input_field'
                        type="password"
                        placeholder="Password"
                        value={userinfo.password}
                        onChange={e => setUserinfo({ ...userinfo, password: e.target.value })}
                    />
                    <button className="SignButt" type="submit" onClick={signUp}>Sign Up</button>
                    <br></br>
                    <p>Already have an account? <span className='Change_Model' onClick={GoToSignIn}>SignIn</span></p>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
