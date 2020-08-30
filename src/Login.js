import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result.user);
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F05%2FFacebook_Logo_%25282019%2529.png&f=1&nofb=1"
                    alt=""
                />

                <img
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Foliviahjcho.files.wordpress.com%2F2013%2F02%2Ffacebook-logo-reversed.png&f=1&nofb=1"
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
