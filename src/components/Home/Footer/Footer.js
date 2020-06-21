import React, {useState} from "react";

const Footer = () => {
    const [aboutMe, setAboutMe] = useState(false);
    return (
        <div className='Footer'>
            {!aboutMe && (
                <>
                    <div className='myImage' onClick={() => (setAboutMe(!aboutMe))} />
                    <div className='instagram' />
                    <div className='podcasts' />
                </>
            )}
            {aboutMe && (
                <div className='container'>
                    <div className='myImage' onClick={() => (setAboutMe(!aboutMe))} />
                    <div className='aboutMe'>
                        <p>Muzyk, naukowiec, humanista i kucharz. Przez takie połączenie do każdego zagadnienia podchodzę kompleksowo. Nie sztuka jest stworzyć przepis. Potrawę należy zrozumieć, poznać jej historię i społeczne powiązania. Jako naukowiec znajduję nie tylko szczegóły i zależności między składnikami i procesami w kuchni, ale ich podstawy działania. </p>
                        <p>Na tej stronie raczej nie znajdziecie raczej przepisów sensu stricte. Przedstawiam Wam historie, idee, powiązania oraz naukowe podstawy potraw i napojów z całego świata.</p>
                        <p>Krótko o sobie? Człowiek renesansu. Syn muz</p>
                    </div>
                    <div className='mail'/>
                </div>
            )}
        </div>
    )
}

export default Footer;