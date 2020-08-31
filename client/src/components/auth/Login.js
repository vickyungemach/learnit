import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, loadUser } from '../../actions/auth';

const Login = ({ login, loadUser, history, isAuthenticated, user }) => {
    useEffect(() => {  
        if(user !== 'loggedOut') {
           loadUser(); 
        }   
        
    }, [loadUser, user, history]);

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history])

    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const { name, password } = formData;


    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();

        login(name, password);
    }


    return (
        <div>
            <div className="container">
                <div className="auth-container">
                    <h2 className="form-heading">Login</h2>
                    <form onSubmit={onSubmit} >
                        <input type="text" name="name" id="name" placeholder="Username" value={name} onChange={onChange} />
                        <input type="password" name="password" id="password" placeholder="Password"  value={password} onChange={onChange}/>
                        <button type="submit" className="btn">Login</button>
                        <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, { login, loadUser })(Login);
