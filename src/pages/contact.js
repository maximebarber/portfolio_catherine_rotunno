import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import ReactContactForm from 'react-mail-form';

class Contact extends React.Component {

    render() {
        const siteTitle = "Catherine Rotunno"
        const siteDescription = "Portfolio of artist Catherine Rotunno"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">
                    <section id="three">
                    <form name="contact" action="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
                        {/* <ReactContactForm to="maximebarberTest@gmail.com" buttonText="Envoyer" titlePlaceholder="Sujet" contentsRows="3"/> */}
                        <h2>Me contacter</h2>
                        <p>Si vous souhaitez acheter ou avoir plus d'informations sur l'un de mes tableaux, n'hésitez pas à me contacter !</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form name="contact" netlify>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Nom" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Envoyer" /></li>
                                </ul>
                            </div>

                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        15 Rue du Bois Fleuri<br />
                                        68500 Guebwiller<br />
                                        France
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Téléphone</span></h3>
                                        06 67 16 14 68
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:catherinerotunno@gmail.com?Subject=Demande%20d'informations" target="_blank">catherinerotunno@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Contact