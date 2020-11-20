import React from 'react'
import Modal from '@material-ui/core/Modal';
import SignUpForm from '../Forms/SignUpForm';


function SignUpPopUp({open,dispatch1,dispatch2}) {
    return (
        <Modal
            open={open}
            onClose={() => dispatch1()}
            className="Signup_popup"
        >
            <SignUpForm dispatch1={dispatch1} dispatch2={dispatch2} />
        </Modal>
    )
}

export default SignUpPopUp
