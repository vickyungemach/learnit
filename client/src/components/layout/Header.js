import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSettings } from '../../actions/auth';
import { closeReview } from '../../actions/review';

const Header = ({ url, showSettings, closeReview }) => {

    return (

        <Fragment>
             {/* Close review if open */}
            <div onClick={closeReview}>
                <Link to={url} className='header'>
                    <h1>Learn It</h1>
                </Link>
                
                 {/* Hamburger menu */}
                <div className="hamburger" onClick={showSettings}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    url: state.words.url
})

export default connect(mapStateToProps, { showSettings, closeReview })(Header);
