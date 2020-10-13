import React, { useEffect } from 'react';
import VocabularyHeading from '../words/VocabularyHeading';
import VocabularyItem from '../words/VocublaryItem';
import { connect } from 'react-redux';
import { getWords, getLists, setURL } from '../../actions/words';


const Vocabulary = ({ lists, getWords, getLists, setURL }) => {

    useEffect(() => {
        getWords();
        getLists();
        setURL();
    }, [getWords, getLists, setURL])


    // Slide down form when clicking outside of form
    const slideDownForm = (e) => {
        const slideForm = document.getElementById('slide-form');
        slideForm.classList.remove('slide-in');
    }

    return (
        <div id="slide-vocabulary"  className="container">
            
                <VocabularyHeading />
                <div className="vocabulary-list">
                    {
                        lists.map(list => (
                            <VocabularyItem key={list._id} title={list.title} />
                        ))
                    }

                </div>
                {/* <div className="slide-form" id="slide-form">
                    <AddWords />
                </div> */}
            </div>

    )
}

const mapStateToProps = state => ({
    lists: state.words.lists
})

export default connect(mapStateToProps, { getLists, getWords, setURL })(Vocabulary);
