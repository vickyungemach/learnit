import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, loadUser } from '../../actions/auth';

const Register = ({ register, loadUser, history, isAuthenticated }) => {
    useEffect(() => {
        loadUser();
    
      }, [loadUser]);
    
      useEffect(() => {
        if(isAuthenticated) {
            history.push('/');
        }
    }, [isAuthenticated, history])
    
      const [formData, setFormData] = useState({
        name: '',
        password: '',
        password2: ''
      });
      
    
      const { name, password, password2 } = formData;
    
      const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        if(password !== password2) {
            console.log('Passwords don\'t match ');
        }

        register(name, password);
      }

    return (
        <div className="container">
            <div className="auth-container">
            <h2 class="form-heading">Create a new Account</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" id="name" placeholder="Username" value={name} onChange={onChange}  />
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={onChange}  />
                <input type="password" name="password2" id="password2"  placeholder="Confirm password" value={password2} onChange={onChange} />
                <button type="submit" class="btn">Register</button>
                <Link to="/login">Login</Link>
            </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps, { register, loadUser })(Register);
