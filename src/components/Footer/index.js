import React from 'react'
import './style.scss'

function Footer() {
    return(
        <footer>
            <div className="wrap">

                <h1>
                    Мифы китая
                </h1>
                <div className="fire">
                    <div className="fire-left">
                        <div className="main-fire"></div>
                        <div className="particle-fire"></div>
                    </div>
                    <div className="fire-main">
                        <div className="main-fire"></div>
                        <div className="particle-fire"></div>
                    </div>
                    <div className="fire-right">
                        <div className="main-fire"></div>
                        <div className="particle-fire"></div>
                    </div>
                    <div className="fire-bottom">
                        <div className="main-fire"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer