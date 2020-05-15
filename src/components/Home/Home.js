import React from "react";
import Header from "./Header";
import Main from "./Main";

function Home() {
    return (
        <>
            <Header />
            <Main />
            <div className='categories'>
                <div className='coffee' />
                <div className='food' />
                <div className='tea' />
            </div>
            <div className='footer' />
        </>
    );
}

export default Home;