import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.instagram.com/cathytoiles/" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.facebook.com/peintresurpalette/" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
                        <li><a href="mailto:catherinerotunno@gmail.com?Subject=Demande%20d'informations" className="icon fa-envelope-o" target="_blank" rel="noopener noreferrer"><span className="label">Email</span></a></li>
                    </ul>
                    {/* <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Footer
