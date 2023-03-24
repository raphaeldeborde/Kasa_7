import React from 'react'
import './footer.css'
import Logofooter from "../../datas/LogoFooter.png"

export default function Footer() {
    return (
        <div className="Footer">
            <img src={Logofooter} alt='logo kasa' />
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}