import React from "react";

function Home() {
    return (
        <div>
            <div className='header'>
                <div className='hamburger' />
                <div className='menu'>
                    <div className='aboutMe'/>
                    <div className='contact' />
                    <div className='logIn' />
                </div>
            </div>
            <div className='empty'>
                <div className='text' />
                <div className='mainText' />
            </div>
            <div className='categories'>
                <div className='coffee' />
                <div className='food' />
                <div className='tea' />
            </div>
            <div className='footer' />
        </div>
    );
}

export default Home;