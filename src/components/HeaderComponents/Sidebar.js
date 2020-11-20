import React, { useContext, useReducer } from 'react'
import './Header.css'
import '../Forms/Forms.css'
import { Button } from '@material-ui/core'
import { auth } from '../../Firebase'
import ProfileContext from '../contexts/ProfileContext'
import SignInPopUp from './SignInPopUp';
import SignUpPopUp from './SignUpPopUp';

function Sidebar() {
    const initialState = { open: false };
    const [state1, dispatch1] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer, initialState);
    
    const profileinfo=useContext(ProfileContext);

    function reducer(state) {
        return { open: !(state.open) };
    }

    return (
        <div className="Header_Sidebar">
            <SignUpPopUp open={state1.open} dispatch1={dispatch1} dispatch2={dispatch2}/>
            <SignInPopUp open={state2.open} dispatch1={dispatch1} dispatch2={dispatch2}/>
            
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
