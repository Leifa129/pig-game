import React from 'react';
import './modal.css';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');

const closeModal = () => {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
};

const openModal = () => {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
};



function Modal() {
    return (
        <div>
            <button className="show-modal" onClick={() => {
               openModal();
            }}>Show modal</button>

            <div className="modal hidden">
                <button className="close-modal" onClick={() => {
                    closeModal();
                }}>&times;</button>
                <h1>I'm a modal window 😍</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
            </div>
            <div className="overlay hidden" onClick={() => {
                closeModal();
            }}></div>

        </div>
    );
}

export default Modal;