import React from 'react-router-dom'
import { Link } from 'react-router-dom';
import "../Erreur/erreur.css"
import "../Erreur/erreurMobile.css"

function Erreur() {
    return (
        <div className="erreur">
            <p className="numero-erreur">404</p>
            <p className="message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="lien">Retour à la page d'accueil</Link>
        </div>
    )
}

export default Erreur