import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img className="image avatar" src={avatar} alt="" />
                    <h1><strong>Catherine Rotunno</strong>,<br />
                    Huile sur palettes et toiles<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
