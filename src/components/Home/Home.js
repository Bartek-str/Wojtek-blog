import React from "react";
import Header from "./Header";
import Main from "./Main";
import Categories from "./Categories";

function Home() {
    return (
        <>
            <Header />
            <Main />
            <Categories />
            <div className='footer' />
        </>
    );
}

export default Home;