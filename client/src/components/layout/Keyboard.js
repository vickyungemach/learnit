import React from 'react';

const Keyboard = ({ onKeyboardClick, uppercase }) => {

    return (
        <div className='keyboard' onClick={onKeyboardClick}>
            <div className="keyboard_row">
                <button className="keyboard_key-letter">{!uppercase ? 'q' : 'Q'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'w' : 'W'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'e' : 'E'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'r' : 'R'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 't' : 'T'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'y' : 'Y'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'u' : 'U'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'i' : 'I'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'o' : 'O'}</button>
                <button className="keyboard_key-letter">{!uppercase ? 'p' : 'P'}</button>
            </div>
            <div className="keyboard_row">
                <button className="keyboard_key-letter">a</button>
                <button className="keyboard_key-letter">s</button>
                <button className="keyboard_key-letter">d</button>
                <button className="keyboard_key-letter">f</button>
                <button className="keyboard_key-letter">g</button>
                <button className="keyboard_key-letter">h</button>
                <button className="keyboard_key-letter">j</button>
                <button className="keyboard_key-letter">k</button>
                <button className="keyboard_key-letter">l</button>
            </div>
            <div className="keyboard_row">
                <button className="keyboard_key-delete">shift</button>
                <button className="keyboard_key-letter">z</button>
                <button className="keyboard_key-letter">x</button>
                <button className="keyboard_key-letter">c</button>
                <button className="keyboard_key-letter">v</button>
                <button className="keyboard_key-letter">b</button>
                <button className="keyboard_key-letter">n</button>
                <button className="keyboard_key-letter">m</button>
                <button className="keyboard_key-delete">del</button>
            </div>
            <div className="keyboard_row">
                <button className="keyboard_key-space" id="space"></button>
            </div>
        </div>
    )
}

export default Keyboard;
