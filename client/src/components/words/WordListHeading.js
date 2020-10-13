import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { openEdit, saveWord } from '../../actions/words';


const WordListHeading = ({ languages, title, id, count, openEdit, saveWord }) => {

    // useState [Add Word]
    const [word, setWord] = useState({
        spanish: '',
        english: ''
    })

    const { spanish, english } = word;

    // Handle onChange word edits 
    const onWordChange = (e) => {

        setWord({
            ...word,
            [e.target.name]: e.target.value
        })
    }


    // Handle onSubmit word edits 

    const onWordSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (spanish === '' || english === '') {
            console.log('Fill out all fields');
        }

        // Create a new word

        saveWord({
            spanish: spanish.trim(),
            english: english.trim(),
            list: id
        });

        // Clear out form after saving word
        setTimeout(() => {
            document.getElementById('spanish').focus();
            setWord({
                spanish: '',
                english: ''
            })
        }, 300);


    }



    const toggleOptions = (e) => {
        let toggleElement;

        // Bubble up to parent class
        if (e.target.innerText === 'EDIT' || e.target.innerTEXT === 'DELETE') {
            toggleElement = e.target.parentElement.parentElement;

        } else if (e.target.classList.contains('word-list-heading_options') ||
            e.target.classList.contains('word-list-heading_count') ||
            e.target.tagName === 'H1') {

            toggleElement = e.target.parentElement;

        } else {
            toggleElement = e.target;
        }

        toggleElement.classList.toggle('show-options');
    }


    // Open and close inline add list form
    const toggleForm = () => {
        document.getElementById('desktop-add-form').classList.toggle('show-edit-form');
        openEdit('createList');
    }


    const onEdit = () => {
        openEdit('editList', { listTitle: title, listId: id._id });

        // Slide up edit form
        document.getElementById('full-screen-form').classList.add('slide-in');
    }



    return (

        <Fragment >

            {/* Add New Word */}
            <div className="stitched-box edit-form" id="desktop-add-form" >
                <div className="form-container">
                    <h1 className="form-heading">Add new word:</h1>
                    <form onSubmit={onWordSubmit}>
                        <input id="spanish" autoCapitalize="none" type="text" placeholder={languages[1]} name="spanish" value={spanish} onChange={onWordChange} />
                        <input className="mt-2" autoCapitalize="none" type="text" placeholder={languages[0]} name="english" value={english} onChange={onWordChange} />
                        <button className="mt-4" type="submit">Save word</button>
                    </form>
                </div>
                <i className="fas fa-times edit-form--close" onClick={toggleForm}></i>
            </ div>


            {/* WordList Heading */}
            <div className="heading_grey-box wordlist-header_grey-box" >
                <div className="heading_grey-box--desktop wordlist-header--desktop">

                    <div className="heading_grey-box_group wordlist-header_group">
                        <h1 className="heading_grey-box_title small" onClick={toggleOptions}>{title}</h1>
                        <button className="transparent-btn hide-mobile" onClick={toggleForm}><p>+</p> Add new word</button>
                    </div>

                    <p className="heading_grey-box_subtitle">{count} Words</p>
                    <button className="transparent-btn hide-desktop wordlist-header_add-button" onClick={toggleForm}><p>+</p> Add new word</button>

                    {/* Add edit options */}

                    {/* <div className="word-list-heading_options">
                        <p className="word-list-heading_edit" onClick={onEdit} >EDIT</p>
                        <p className="word-list-heading_delete">DELETE</p>
                     </div> */}

                </div>
            </div >

        </Fragment>
    )
}

const mapStateToProps = state => ({
    languages: state.auth.user.languages
})

export default connect(mapStateToProps, { openEdit, saveWord })(WordListHeading);



