import React from 'react';
import { useState } from 'react';
import "./carroussel.css"
import "./carrousselMobile.css"


const Carroussel = (props) => {

    const photo = props.photo;
    const [i, setI] = useState(0)

    const Previous = () => {
        setI(i - 1);
        if (i === 0) setI(photo.length - 1)
    }

    const Next = () => {
        setI(i + 1);
        if (i === (photo.length - 1)) setI(0)
    }

    const GoToSlide = (i) => {
        setI(i)
    }

    if (photo.length === 1) {
        return (
            <div className={props.className}>
                <img src={photo[i]} alt={photo[i]} />
            </div>
        );
    }

    return (
        <div className={props.className}>
            <div className='slider'>
                <i className="fa-solid fa-chevron-left gauche" onClick={Previous}></i>
                <img src={photo[i]} alt={photo[i]} />
                <i className="fa-solid fa-chevron-right droite" onClick={Next}></i>
            </div>
            <div className="position">
                <p>{i + 1}/{photo.length}</p>
            </div>
            <div className="bullet">
                {photo.map((slide, index) => (
                    <span key={index} onClick={() => { GoToSlide(index) }} className="bulle"><i className="fa-solid fa-circle"></i></span>
                ))}
            </div>

        </div>
    );
};

export default Carroussel;
