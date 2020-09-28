import React from 'react'
import sections from '../../sections'
import Section from '../Section'
import './style.scss'

function Body() {
    return (
        <div>
        <section className="section1">
            <a href="#about" className="arrow-7">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </section>
        <Section section={sections.section2} id="about" />
        <section className="section3">

        </section>
            <Section section={sections.section4} id="dragons" />
        </div>
    )

}

export default Body