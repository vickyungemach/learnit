import React, { useEffect } from 'react';
import Landing from './Landing';
import Review from './Review';
import { getWords, getLists } from '../../../actions/words';
import { getReview } from '../../../actions/review';
import { connect } from 'react-redux';



const Home = ({ getWords, getReview, getLists }) => {

    useEffect(() => {
        getWords();
        getReview();
        getLists();
    }, [])

   
    return (
        <div>
            <Landing />
            <Review />
        </div>
    )
}


export default connect(null, { getWords, getLists, getReview })(Home);