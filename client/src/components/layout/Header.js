import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSettings } from '../../actions/auth';
import { closeReview } from '../../actions/review';
import pineapple from '../../img/graphics/pineapple.png';

const Header = ({ url, showSettings, closeReview, isAuthenticated }) => {

   
    const [currentURL, setCurrentURL] = useState('register');

    // Toggle between Sign in and sign up
    function changeURL() {
        console.log('changed')
        setCurrentURL(window.location.href);
    }


    // Logged in
    const loggedIn = (
        // Close review if open
        <div className='header' onClick={closeReview}>

            {/* Dictionary Search */}
            <div className="dictionary-searchbar">
                {/* <form action="">
                    <i class="fas fa-book-open input-icon"></i><input class="heading_grey-box_input rounded-input" type="text" />
                </form> */}
            </div>

            {/* Logo */}
            <Link to={url}>
                <h1>Learn It</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="nav">
                <Link to="/vocabulary" className="nav-link">vocabulary</Link>
                <Link to="" className="nav-link">conjugation</Link>

                <img src={pineapple} alt="" /><Link to="" className="nav-link nav-link--user">vicky</Link>


            </div>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={showSettings}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>

        </div>
    )


    // Logged in
    const loggedOut = (
        <div className='header'>

            {/* Dictionary Search */}
            <div className="dictionary-searchbar">

            </div>

            {/* Logo */}
            <Link to="">
                <h1>Learn It</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="nav">

                {
                    currentURL.includes('login') ? 
                    
                       <Link to="login" className="nav-link nav-link--signin" onClick={changeURL} >Sign in <i className="fas fa-sign-in-alt"> </i></Link> :
                        <Link to="register" className="nav-link nav-link--signin" onClick={changeURL}>Sign up <i className="fas fa-user-plus"> </i></Link>

                }


                


            </div>


        </div>
    )



    return (

       !isAuthenticated ? loggedOut : loggedIn

    )
}

const mapStateToProps = state => ({
    url: state.words.url,
    isAuthenticated: state.auth.isAuthenticated

})

export default connect(mapStateToProps, { showSettings, closeReview })(Header);
