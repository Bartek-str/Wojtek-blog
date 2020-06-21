import React, {useState} from "react";

function Categories() {
    const [coffee, setCoffee] = useState(false);
    const [food, setFood] = useState(false);
    const [tea, setTea] = useState(false);
    return (
        <>
            <div className='categories'>
                {!coffee && !food && !tea && (
                    <>
                        <div className='coffee'>
                            <h1>Kawa</h1>
                            <div className='coffeeimg img' onClick={() => (setCoffee(!coffee))} />
                            <div className='text'>
                                <p>To, co kocham i z czym pracuję.</p>
                                <p>Nawet nie pomyślałbyś ile jest sposobów jej parzenia, nie wspominając o jej gatunkach, szczepach, sposobach obróbki oraz miejscach pochodzenia.</p>
                                <p>Czym jest kawa po arabsku, dlaczego "cafe latte" tak na prawdę nie istnieje, o czym myśli barista mówiąc, że "Kercha w dripie na trzysta lepsza na dwa na dziewięćdziesiąt pięć" oraz dlaczego kawa po polsku była słynna na całą Europę.</p>
                            </div>
                        </div>
                        <div className='food' onClick={() => (setFood(!food))}>
                            <h1>Jedzenie, wypieki...</h1>
                            <div className='breadimg img' />
                            <div className='text'>
                                <p>Jedzenie... co tu dużo przedstawiać</p>
                                <p>Każdy je kocha.</p>
                                <p>Jednak, czy wiesz skąd pochodzi biszkopt? Jak łatwo jest nie marnować produktów w kuchni? Że dobry posiłek wcale nie musi być skomplikowany oraz jak zorganizować swoją kuchnie.</p>
                                <p>...pssst poznasz sekret matek.</p>
                                <p>Jak ugotować coś z niczego.</p>
                            </div>
                        </div>
                        <div className='tea' onClick={() => (setTea(!tea))}>
                            <h1>Herbata</h1>
                            <div className='teaimg img' />
                            <div className='text'>
                                <p>Rozpieszcza smakiem, koi aromatem.</p>
                                <p>Dziesiątki odmian i plantacji od stuleci zadowalały cesarskie podniebienia a Ty pijesz ekspresówkę?</p>
                                <p>Po zgłębieniu tego ciekawego tematu raczej odejdziesz od takich rozwiązań bo nie wiesz jeszcze, co skrywają w sobie liście herbaty!</p>
                            </div>
                        </div>
                    </>
                )}
                {coffee && (
                    <div className='posts'>
                        <div className='coffeeSelected' onClick={() => (setCoffee(!coffee))}>
                            <h1>Kawa</h1>
                            <div className='coffeeimg img' />
                            <div className='text'>
                                <p>To, co kocham i z czym pracuję.</p>
                                <p>Nawet nie pomyślałbyś ile jest sposobów jej parzenia, nie wspominając o jej gatunkach, szczepach, sposobach obróbki oraz miejscach pochodzenia.</p>
                                <p>Czym jest kawa po arabsku, dlaczego "cafe latte" tak na prawdę nie istnieje, o czym myśli barista mówiąc, że "Kercha w dripie na trzysta lepsza na dwa na dziewięćdziesiąt pięć" oraz dlaczego kawa po polsku była słynna na całą Europę.</p>
                            </div>
                        </div>
                        <div className='numbers' />
                    </div>
                )}
                {food && (
                    <div className='posts'>
                        <div className='foodSelected' onClick={() => (setFood(!food))}>
                            <h1>Jedzenie, wypieki...</h1>
                            <div className='breadimg img' />
                            <div className='text'>
                                <p>Jedzenie... co tu dużo przedstawiać</p>
                                <p>Każdy je kocha.</p>
                                <p>Jednak, czy wiesz skąd pochodzi biszkopt? Jak łatwo jest nie marnować produktów w kuchni? Że dobry posiłek wcale nie musi być skomplikowany oraz jak zorganizować swoją kuchnie.</p>
                                <p>...pssst poznasz sekret matek.</p>
                                <p>Jak ugotować coś z niczego.</p>
                            </div>
                        </div>
                        <div className='numbers' />
                    </div>
                )}
                {tea && (
                    <div className='posts'>
                        <div className='teaSelected' onClick={() => (setTea(!tea))}>
                            <h1>Herbata</h1>
                            <div className='teaimg img' />
                            <div className='text'>
                                <p>Rozpieszcza smakiem, koi aromatem.</p>
                                <p>Dziesiątki odmian i plantacji od stuleci zadowalały cesarskie podniebienia a Ty pijesz ekspresówkę?</p>
                                <p>Po zgłębieniu tego ciekawego tematu raczej odejdziesz od takich rozwiązań bo nie wiesz jeszcze, co skrywają w sobie liście herbaty!</p>
                            </div>
                        </div>
                        <div className='numbers' />
                    </div>
                )}
            </div>
        </>
    );
}

export default Categories;