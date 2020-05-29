import React from "react";
import Header from "./Header";
import Main from "./Main";
import Categories from "./Categories";
import Footer from "./Footer";
import ShortAboutMe from "./ShortAboutMe";

function Home() {
    return (
        <>
            <Header />
            <Main />
            <Categories />
            <ShortAboutMe />
            <Footer />
        </>
    );
}

export default Home;