import React from "react";
import Coffee from '../../../assets/IMG_2326.jpg';
import Tea from '../../../assets/IMG_2750.jpg'

function Categories() {
    return (
        <>
            <div className='categories'>
                <div className='coffee'>
                    <div>Kawa</div>
                    <img src={ Coffee } alt='coffee' />
                </div>
                <div className='food'>
                    <div>Jedzenie, wypieki...</div>
                    <div className='foodIMG' />
                </div>
                <div className='tea'>
                    <div>Herbata</div>
                    <img src={ Tea } alt='tea' />
                </div>
            </div>
        </>
    );
}

export default Categories;