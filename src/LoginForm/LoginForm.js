import React from 'react';
import './LoginForm.css';

function LoginForm(props){
    return(
        <section id='log-in'>
        <p>log in section</p>
        <form>
            <fieldset>
<label htmlFor="username">Username</label>
<input className="form-control" type="text" name="username" id="username" placeholder="james.bond" required />
<label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
            </fieldset>
            <button id='login' onClick={e => props.history.replace("/main")}>Login</button>
            <button id='cancel' onClick={e => props.history.replace("/")}>Cancel</button>
            <p>no login..yet, button leads to main</p>
        </form>
    </section>
    )
}

export default LoginForm;