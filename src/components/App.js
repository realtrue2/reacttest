import React, {PureComponent} from 'react'
import {render} from 'react-dom'
import Header from './Header'
import Body from './Body'
import Footer from "./Footer";

class App extends PureComponent {

    render()
    {
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>

        )
    }

}

export default App