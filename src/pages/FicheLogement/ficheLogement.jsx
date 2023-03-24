import React from 'react';
import { useParams } from 'react-router-dom';
import Carroussel from '../../components/Carroussel/carroussel';
import "./ficheLogement.css";
import "./ficheLogementMobile.css"
import { homeList } from "../../datas/homeList";
import Collapse from "../../components/Collapse/collapse";
import Erreur from '../Erreur/erreur';
import Rating from '../../components/Rating/rating';


const FicheLogement = () => {

    const id = useParams();
    const Id = id.id;

    const index = homeList.findIndex(i => i.id === Id);


    if (index === -1) {
        return (<Erreur />)
    }

    return (
        <div className='ficheLogement'>
            <div className='body'>
                <Carroussel photo={homeList[index].pictures} className="caroussel" />
                <div className='information'>
                    <div className='adress-tag'>
                        <span className='titre-adresse'>
                            <p className='titre'> {homeList[index].title}</p>
                            <p className='adresse'> {homeList[index].location}</p>
                        </span>
                        <span className='tag'>
                            {homeList[index].tags.map((tag, index) => (
                                <p key={index}> {tag}</p>
                            ))}
                        </span>

                    </div>
                    <div className='agent-note'>
                        <span className='agent'>
                            <p>{homeList[index].host.name}</p>
                            <img src={homeList[index].host.picture} alt={homeList[index].host.name} />
                        </span>
                        <span className='note'>
                            <Rating rate={homeList[index].rating} className="rate" />
                        </span>
                    </div>
                </div>
                <div className='description-equippement'>
                    <Collapse className="description" nom="Description">
                        {homeList[index].description}
                    </Collapse>
                    <Collapse className="equipement" nom="Equipements">
                        {homeList[index].equipments.map((equip, index) => (
                            <p key={index}>{equip}</p>
                        ))}
                    </Collapse>
                </div>
            </div>
        </div>
    );

};

export default FicheLogement;