import React from 'react'

import { Link } from "gatsby"
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

function DynamicLink() {
    if (window.location.pathname == '/contact/') {
        return <Link to="/">Mes tableaux</Link>
    } else {
        return <Link to="/contact/">Me contacter</Link>
    }
}

class Header extends React.Component {

    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link  to="/"><img className="image avatar" src={avatar} alt="" /></Link>
                    <h1><strong>Catherine Rotunno</strong><br />
                    Huile sur palettes et toiles<br /></h1>
                    <ul className="actions">
                        <DynamicLink />
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
