import React from 'react';
import { useState } from 'react';
import '../Collapse/collapse.css';

const Collapse = (props) => {
    const nom = props.nom;

    const [open, setOpen] = useState(false);

    const HandleClick = () => {
        (open === false) ? setOpen(true) : setOpen(false);

    }


    if (open === true) {
        return (
            <div className={props.className}>

                <span className='bandeau_Collapse'> {nom}<i className="fa-solid fa-chevron-up ouvert" onClick={HandleClick}></i></span>
                <span className='corps-collapse'>
                    {props.children}
                </span>

            </div>
        );
    }

    return (
        <div className={props.className}>
            <span className='bandeau_Collapse'> {nom}    <i className="fa-solid fa-chevron-down ferme" onClick={HandleClick}></i> </span>
        </div>
    );
};

export default Collapse;