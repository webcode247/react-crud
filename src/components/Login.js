import React, { useContext } from 'react';
import { Context } from '../context';
import { Redirect } from 'react-router-dom';



const Login = () => {

    const context = useContext(Context);
    const { username, password, isFilled, handleChange, handleSubmit } = context;

    return (
        <div style={{width: '30vw', margin: 'auto', marginTop: '12em'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Username" 
                      name="username" value={username}
                      onChange={handleChange} 
                    />
                </div>
                <div>
                    <input type="text" placeholder="Password" 
                      name="password" value={password}
                      onChange={handleChange} 
                    />
                </div>
                <div><button type="submit">Login</button></div>
                <p id="error"></p>
                { isFilled ? <Redirect to="/user" /> : "" }
            </form>
            
        </div>
    );
}

export default Login;