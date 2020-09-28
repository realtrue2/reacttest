import React from 'react'
import MenuItems from '../MenuItems'
import items from '../../items'
import './style.scss'

function Header() {
    console.log('dsa')
    return (
        <header className="fixed">
            <div className="wrap">
                <div className="headerline">
                    <h1>
                        <a className="logo">
                            МИФЫ КИТАЯ
                        </a>
                    </h1>
                    <MenuItems items = { items }/>
                </div>
                {/*<div className="fire">*/}
                {/*    <div className="fire-left">*/}
                {/*        <div className="main-fire"></div>*/}
                {/*        <div className="particle-fire"></div>*/}
                {/*    </div>*/}
                {/*    <div className="fire-main">*/}
                {/*        <div className="main-fire"></div>*/}
                {/*        <div className="particle-fire"></div>*/}
                {/*    </div>*/}
                {/*    <div className="fire-right">*/}
                {/*        <div className="main-fire"></div>*/}
                {/*        <div className="particle-fire"></div>*/}
                {/*    </div>*/}
                {/*    <div className="fire-bottom">*/}
                {/*        <div className="main-fire"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

        </header>
    )

}

export default Header