import React from "react";
import Coffee from '../../../assets/IMG_2326.jpg';
import Tea from '../../../assets/IMG_2750.jpg'

function Categories() {
    return (
        <>
            <div className='categories'>
                <div className='coffee'>
                    <div className='title'>Kawa</div>
                    <img src={ Coffee } alt='coffee' />
                    <div className='text'>
                        <span>To, co kocham i z czym pracuję.</span>
                        <span>Nawet nie pomyślałbyś ile jest sposobów jej parzenia, nie wspominając o jej gatunkach, szczepach, sposobach obróbki oraz miejscach pochodzenia.</span>
                        <span>Czym jest kawa po arabsku, dlaczego "cafe latte" tak na prawdę nie istnieje, o czym myśli barista mówiąc, że "Kercha w dripie na trzysta lepsza na dwa na dziewięćdziesiąt pięć" oraz dlaczego kawa po polsku była słynna na całą Europę.</span>
                    </div>
                </div>
                <div className='food'>
                    <div className='title'>Jedzenie, wypieki...</div>
                    <div className='foodIMG' />
                    <div className='text'>
                        <span>Jedzenie... co tu dużo przedstawiać</span>
                        <span>Każdy je kocha.</span>
                        <span>Jednak, czy wiesz skąd pochodzi biszkopt? Jak łatwo jest nie marnować produktów w kuchni? Że dobry posiłek wcale nie musi być skomplikowany oraz jak zorganizować swoją kuchnie.</span>
                        <span>...pssst poznasz sekret matek.</span>
                        <span>Jak ugotować coś z niczego.</span>
                    </div>
                </div>
                <div className='tea'>
                    <div className='title'>Herbata</div>
                    <img src={ Tea } alt='tea' />
                    <div className='text'>
                        <span>Rozpieszcza smakiem, koi aromatem.</span>
                        <span>Dziesiątki odmian i plantacji od stuleci zadowalały cesarskie podniebienia a Ty pijesz ekspresówkę?</span>
                        <span>Po zgłębieniu tego ciekawego tematu raczej odejdziesz od takich rozwiązań bo nie wiesz jeszcze, co skrywają w sobie liście herbaty!</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;