import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { connect } from 'react-redux';
import { nextCard, removeLastWord, addTime, wordUpdate } from '../../actions/review';
// import Keyboard from './Keyboard';
import bonusPoints from '../../sounds/bonus-points.mp3';


const Review = ({ review: { list, currentWord, translation, id, rating, loadingList }, nextCard, removeLastWord, addTime, wordUpdate }) => {
    const [play] = useSound(bonusPoints);
    const [word, setWord] = useState('');


    useEffect(() => {
        checkAnswer(word);
    }, [word]);

    const english = document.getElementById("english");
    const spanish = document.getElementById("spanish");
    const review = document.getElementById("review");

    const updateCount = () => {
        const counter = document.getElementById('counter');
        const speed = 150;

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = Math.round(target / speed);

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }

    // Reset the review card
    function resetReview() {
        english.classList.remove('small');
        spanish.classList.remove('correct');
        spanish.blur();
        setWord('');
    }


    // Check answer 
    const checkAnswer = async (typedAnswer) => {
        // Correct answer
        if (typedAnswer === translation) {

            play();

            spanish.classList.add("correct");

            // Get current review list length
            const array = list.length - 1;

            // Get new dueDate
            const newDueDate = await addTime(rating);

            // Add 1 to rating and update word in db
            wordUpdate(id, {
                rating: rating + 1,
                dueDate: newDueDate
            });

            if (array > 0) {
                setTimeout(() => {
                    nextCard(currentWord, array, 'correctAnswer');
                    resetReview();
                }, 1000);


                // Last word in review list
            } else {
                setTimeout(() => {
                    removeLastWord(currentWord);
                    review.classList.remove('review-now');
                    resetReview();
                    updateCount();
                }, 1000);

            }
        }
    }

    const onChange = async (e) => {
        setWord(e.target.value);
        checkAnswer(e.target.value);
    }

    const shrinkEnglish = () => {
        english !== null && english.classList.add("small");
        spanish.focus();
    }


    const keyboardAction = (e) => {

        // Handle Enter key press
        if (e.key === 'Enter') {
            spanish.blur();

            // If nothing typed, show translation
            if (word === '') {
                setWord(' ' + translation + ' ');
                const array = list.length - 1;

                // Subtract from rating
                if (rating !== 0) {
                    wordUpdate(id, {
                        rating: rating - 1
                    });
                }

                setTimeout(() => {
                    nextCard(currentWord, array, 'incorrectAnswer');
                    resetReview();
                }, 2500);

            // Check if word is incorrect
            } else if (word !== translation) {

                spanish.classList.add("incorrect");

                // Show the right answer
                setTimeout(() => {
                    spanish.classList.remove('incorrect');
                    setWord(' ' + translation + ' ');
                    const array = list.length - 1;

                    // Subtract from rating
                    if (rating !== 0) {
                        wordUpdate(id, {
                            rating: rating - 1
                        });
                    }

                    // Show next word
                    setTimeout(() => {
                        nextCard(currentWord, array, 'incorrectAnswer');
                        resetReview();
                    }, 2500);
                }, 1000);


            }
        }
    }

    let uppercase = false;

    const onKeyboardClick = (e) => {
        console.log(uppercase);
        shrinkEnglish();

        // Check if a letter was clicked
        if (e.target.innerHTML.length === 1) {
            setWord(word + e.target.innerHTML);
            uppercase = false;
        }

        // Check if delete was clicked 
        if (e.target.innerHTML === 'del') {
            setWord(word.slice(0, -1));
        }

        // Check if shift was clicked
        if (e.target.innerHTML === 'shift') {
            uppercase = true;
        }

        // Check if space was clicked
        if (e.target.id === 'space') {
            setWord(word + ' ');
        }
    }




    !loadingList && document.addEventListener('keydown', shrinkEnglish);


    return (
        <div className='review' id="review" onKeyDown={shrinkEnglish}>
            <h1 className="english-word" id="english">{currentWord}</h1>
            <input
                // readOnly={true}
                autoCapitalize="none"
                className="review-input"
                id="spanish" type="text"
                value={word}
                onChange={onChange}
                onKeyPress={keyboardAction}
                onClick={shrinkEnglish} />
            {/* <Keyboard onKeyboardClick={onKeyboardClick} uppercase={uppercase} /> */}
        </div>

    )
}


const mapStateToProps = state => ({
    review: state.review
})

export default connect(mapStateToProps, { nextCard, removeLastWord, addTime, wordUpdate })(Review);


