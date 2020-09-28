import React, {PureComponent} from 'react'

class Section extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {section, id} = this.props

        return (
            <section className={this.state.isOpen ? 'section2 open' : 'section2'}>
                <div className="wrap">
                    <h1 id={id}>
                        {section.h1}
                    </h1>
                    <div  className="text">
                        <div className={this.state.isOpen ? 'short-text open' : 'short-text'} dangerouslySetInnerHTML={{__html:  section.textfull}} >

                        </div>
                        <div onClick={this.handleClick} className={this.state.isOpen ? 'open-button open' : 'open-button'}>
                            {this.state.isOpen ? 'Свернуть' : 'Развернуть'}
                        </div>
                    </div>

                </div>

            </section>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Section