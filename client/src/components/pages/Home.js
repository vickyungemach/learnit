import React, {useEffect} from 'react';
import Landing from '../layout/Landing';
import Review from '../layout/Review';
import { getWords, getLists } from '../../actions/words';
import { getReview } from '../../actions/review';
import { connect } from 'react-redux';
import Settings from '../layout/Settings';
import Ranking from '../layout/Ranking';

const Home = ({ getWords,  getReview, getLists }) => {
    useEffect(() => {
        getWords();
        getReview();
        getLists();
    }, [getWords, getReview, getLists])

    return (
        <div>
           
            <div id='home-container' className="container">
                <Landing />
                <Review />
                <Ranking />
                <Settings />
            </div>
        </div>
    )
}

export default connect(null, {getWords, getLists, getReview})(Home);