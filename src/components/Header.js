import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img className="image avatar" src={avatar} alt="" /></a>
                    <h1><strong>Catherine Rotunno</strong><br />
                    Huile sur palettes et toiles<br /></h1>
                    <ul className="actions">
                        <li><a href="#">Me contacter</a></li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
