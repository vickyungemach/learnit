import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Settings = ({ userName, logout }) => {
    return (
        <div className="settings" id="settings">
            <h4> {userName} </h4>
            <button className="btn" onClick={logout}>Log Out</button>
        </div>
    )
}

const mapStateToProps = state => ({
    userName: state.auth.user.name
})

export default connect(mapStateToProps, { logout })(Settings);
