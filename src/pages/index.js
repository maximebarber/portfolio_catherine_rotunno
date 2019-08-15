import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/09.jpg'
import thumb10 from '../assets/images/thumbs/10.jpg'

import full01 from '../assets/images/thumbs/01.jpg'
import full02 from '../assets/images/thumbs/02.jpg'
import full03 from '../assets/images/thumbs/03.jpg'
import full04 from '../assets/images/thumbs/04.jpg'
import full05 from '../assets/images/thumbs/05.jpg'
import full06 from '../assets/images/thumbs/06.jpg'
import full07 from '../assets/images/thumbs/07.jpg'
import full08 from '../assets/images/thumbs/08.jpg'
import full09 from '../assets/images/thumbs/09.jpg'
import full10 from '../assets/images/thumbs/10.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Barque', description: 'Huile sur palette - 165x110 - 900 €'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Barque', description: '900 €'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Barque', description: '900 €'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Barque', description: '900 €'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Ponton', description: '900 €'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Fleurs', description: '900 €'},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'Fleurs', description: '900 €'},
    { id: '8', source: full08, thumbnail: thumb08, caption: 'Venise', description: '900 €'},
    { id: '9', source: full09, thumbnail: thumb09, caption: 'Nature morte', description: '900 €'},
    { id: '10', source: full10, thumbnail: thumb10, caption: 'Plage', description: '900 €'}
];

class HomeIndex extends React.Component {

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

                    <section id="one">
                        <header className="major">
                            <h2>Ipsum lorem dolor aliquam ante commodo<br />
                            magna sed accumsan arcu neque.</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                    </section>

                    <section id="two">
                        <h2>Mes tableaux</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex