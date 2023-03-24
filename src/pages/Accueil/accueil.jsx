import React from 'react'
import './accueil.css'
import Card from '../../components/Card/card.jsx'
import Section1 from '../../components/Section1/section1'

export default function Accueil() {
    return (
        <div className="section1">
            <Section1 />
            <Card />
        </div>
    )
}