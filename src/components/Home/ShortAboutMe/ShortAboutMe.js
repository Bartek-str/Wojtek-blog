import React from "react";
import WojtekPic from "../../../assets/IMG_0943.jpg";

function ShortAboutMe() {
    return (
        <div className='shortAboutMe'>
            <img src={WojtekPic} alt='portret' />
            <div className='text'>
                <div className='mainAbout'>Krótko o mnie</div>
                <span>Muzyk, naukowiec, humanista i kucharz. Przez takie połączenie do każdego zagadnienia podchodzę kompleksowo. Nie sztuka jest stworzyć przepis. Potrawę należy zrozumieć, poznać jej historię i społeczne powiązania. Jako naukowiec znajduję nie tylko szczegóły <br /> i zależności między składnikami i procesami w kuchni, ale ich podstawy działania.</span>
                <span>Na tej stronie raczej nie znajdziecie raczej przepisów sensu stricte. Przedstawiam Wam historie, idee, powiązania oraz naukowe podstawy potraw i napojów z całego świata.</span>
                <span>Krótko o sobie? Człowiek renesansu. Syn muz</span>
            </div>
        </div>
    )
}

export default ShortAboutMe;