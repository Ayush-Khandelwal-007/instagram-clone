import React, { useState } from 'react'
import './Forms.css'
import { Input } from '@material-ui/core'
import { auth } from '../../Firebase';

function SignInForm({ dispatch1, dispatch2 }) {

    const [userinfo, setUserinfo] = useState({
        displayName: '',
        email: '',
        password: ''
    });
    
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(userinfo.email, userinfo.password)
            .then((authUser) => {
                console.log(authUser.user);
            })
            .catch((err) => { alert(err.message); })
        dispatch2();
    }

    const GoToSignUp = () => {
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
                    <button className="SignButt" type="submit" onClick={signIn}>Sign In</button>
                    <br></br>
                    <p>Don't have an account? <span className='Change_Model' onClick={GoToSignUp}>SignUp</span></p>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
