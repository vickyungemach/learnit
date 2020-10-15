import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const PrivateRoute = ({ component: Component, auth: {isAuthenticated, loading}, ...rest }) => (
    <Route  {...rest} render= {props => 
        !isAuthenticated && loading ? (<Redirect to="/login" />) : (<Component {...props} />)
        // false             //true
    
    } />
)





// const PrivateRoute = ({ auth: { isAuthenticated }, component: Component, ...rest }) => {

//     return (
//         <Route {...rest} render= {props =>
//             !isAuthenticated ?
//                 (<Redirect to='/login' />) :
//                 (<Component {...props} />)
//         } />

//     )
// }

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);