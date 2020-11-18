import React, { useState, useEffect, useReducer } from 'react'
import './Header.css'
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core'
import SignUpForm from '../Forms/SignUpForm';
import { auth } from '../../Firebase'

function Sidebar() {
    const initialState = { open: false };
    const [state, dispatch] = useReducer(reducer, initialState);
    const SignUpFormRef = React.forwardRef((props, ref) => <SignUpForm {...props} ref={ref} />)
    const [profileinfo, setProfileinfo] = useState({});

    function reducer(state) {
        return {open: !(state.open) };
    }


useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            setProfileinfo(authUser);
            if (authUser.displayName) {

            }
            else {
                return authUser.updateProfile({
                    displayName: profileinfo.username,
                });
            }
        }
        else {
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
            open={state.open}
            onClose={() => dispatch({ type: 'hide' })}
            className="Signup_popup"
        >
            <SignUpFormRef dispatch={dispatch} />
        </Modal>
        {
            profileinfo ?
                (<Button onClick={() => auth.signOut()}>Logout</Button>
                ) : (<Button onClick={() => dispatch()}>Sign Up</Button>
                )

        }
        {
            profileinfo ?
                (<></>
                ) : (<Button>Sign In</Button>
                )

        }
    </div>
)
}

export default Sidebar
