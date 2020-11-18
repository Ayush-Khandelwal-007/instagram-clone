import React, { useState } from 'react'
import './Forms.css'
import { Input, Button } from '@material-ui/core'
import { auth } from '../../Firebase';

function SignUpForm({dispatch}) {
    const [userinfo, setUserinfo] = useState({
        username: '',
        email: '',
        password: ''
    });

    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(userinfo.email, userinfo.password)
            .then((authUser)=>{
                 authUser.user.updateProfile(
                     {
                         displayName:userinfo.username,
                     }
                 )
            })
            .catch((err) => { console.log(err); })
        dispatch();
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
                        placeholder="Username"
                        value={userinfo.username}
                        onChange={e => setUserinfo({ ...userinfo, username: e.target.value })}
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
                    <Button type="submit" onClick={signUp}>Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
