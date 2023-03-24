import Image1 from '../../datas/Image1.png'
import React from 'react'
import './section1.css'
import './section1Mobile.css'

export default function Section() {
    return (
    <div className="section">
        <img src={Image1} className="imageSection1" alt="La côte lors d'un mauvais temps"/>
        <span className="punchline">Chez vous, partout et ailleurs</span>
    </div>
    )
}     