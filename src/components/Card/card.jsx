import React from 'react';
import { homeList } from "../../datas/homeList";
import { useNavigate } from "react-router-dom";
import './card.css'
import './cardMobile.css'

const Card = (props) => {
    const lien = useNavigate();

    const HandleId = (i) => {
        lien("/fichelogement/" + i)
    }

    return (
        <ul className="Card">

            {homeList.map((location) => (
                <li key={location.id} onClick={() => HandleId(location.id)}>
                    <img src={location.cover} alt="couverture du bien" />
                    <p>{location.title}</p>
                </li>
            ))}

        </ul>
    );
};

export default Card;