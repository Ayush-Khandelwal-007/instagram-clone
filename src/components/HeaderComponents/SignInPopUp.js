import React from 'react'
import Modal from '@material-ui/core/Modal';
import SignInForm from '../Forms/SignInForm';

function SignInPopUp({open,dispatch1,dispatch2}) {
    return (
        <Modal
            open={open}
            onClose={() => dispatch2()}
            className="Signin_popup"
        >
            <SignInForm dispatch1={dispatch1} dispatch2={dispatch2} />
        </Modal>
    )
}

export default SignInPopUp