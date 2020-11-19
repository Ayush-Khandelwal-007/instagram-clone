import React, { useState, useEffect, useReducer } from 'react'
import './Header.css'
import '../Forms/Forms.css'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core'
import SignUpForm from '../Forms/SignUpForm';
import SignInForm from '../Forms/SignInForm';
import { auth } from '../../Firebase'

function Sidebar() {
    const initialState = { open: false };
    const [state1, dispatch1] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer, initialState);
    

    const [profileinfo, setProfileinfo] = useState({});

    function reducer(state) {
        return { open: !(state.open) };
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setProfileinfo(authUser);
            }
            else {
                console.log('footer');
                setProfileinfo(null);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [profileinfo])

    return (
        <div className="Header_Sidebar">
            <Modal
                open={state1.open}
                onClose={() => dispatch1({ type: 'hide' })}
                className="Signup_popup"
            >
                <SignUpForm dispatch1={dispatch1} dispatch2={dispatch2} />
            </Modal>
            <Modal
                open={state2.open}
                onClose={() => dispatch2({ type: 'hide' })}
                className="Signin_popup"
            >
                <SignInForm dispatch1={dispatch1} dispatch2={dispatch2} />
            </Modal>
            {
                profileinfo ?
                    (
                        <div className="LoggedIn_Info">
                            <p>Logged in as</p>
                            <h3> {profileinfo.displayName}</h3>
                        </div>
                    ) : (<Button onClick={() => dispatch1()}>Sign Up</Button>
                    )

            }
            {
                profileinfo ?
                    (
                        <Button onClick={() => auth.signOut()}>Logout</Button>
                    ) : (<Button onClick={() => dispatch2()}>Sign In</Button>
                    )

            }
        </div>
    )
}

export default Sidebar
