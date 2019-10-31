import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import headerImage from '../assets/images/thumbs/00.jpg'

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
import thumb11 from '../assets/images/thumbs/11.jpg'
import thumb12 from '../assets/images/thumbs/12-1.jpg'

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
import full11 from '../assets/images/thumbs/11.jpg'
import full12 from '../assets/images/thumbs/12-1.jpg'

const DEFAULT_IMAGES = [
    { id: '12', source: full12, thumbnail: thumb12, caption: 'La tigresse', description: 'Huile sur toile - 90 x 120 - 900 €' },
    { id: '11', source: full11, thumbnail: thumb11, caption: 'La panthère', description: 'Huile sur palette - 137 x 100 - 900 €' },
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Barque à Lesina 1', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Barque à Lesina 2', description: 'Huile sur palette - 137 x 100 - Déjà vendu'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Barque à Lesina 3', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Bateau à Burano', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Ponton Lac Lésina', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Les Genêts', description: 'Huile sur toile - 89 x 131 - 700 €'},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'Fleurs', description: 'Huile sur toile - 89 x 131 - Déjà vendu'},
    { id: '8', source: full08, thumbnail: thumb08, caption: 'Façade Vénitienne', description: 'Huile sur toile - Déjà vendu'},
    { id: '9', source: full09, thumbnail: thumb09, caption: 'Nature morte', description: 'Huile sur toile - 117 €'},
    { id: '10', source: full10, thumbnail: thumb10, caption: 'Plage à Lesina', description: 'Huile sur toile - 357 €'},
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
                            <h2>Créations Catherine Rotunno</h2>
                        </header>
                        <p>Je peins sur des palettes ou des toiles au gré de mes inspirations : voyages, photos...</p>
                        {/* <img class='headerImage' src={headerImage} alt="photo de l'artiste"/> */}
                        <p>Bien qu’ayant essayé d’autres matières telles que les pastels ou l’acrylique, c’est l’huile que je préfère.</p>
                        <p>J’apprécie plus particulièrement les grands formats : 130x100 pour les palettes par exemple ou 89x131 pour certaines toiles.</p>
                        <p>Ce qui me plaît avec les palettes c’est leur matière qui me fait penser aux coques des bateaux.</p>
                        <p>Les sujets dépendent de mes lieux de promenade ou de voyage. J’aime aussi photographier les fleurs en macro afin de les reproduire avec tous leurs détails. 
                        Cependant cela ne s’arrête pas là... une vieille façade de maison m’a récemment inspirée et demain? qui sait?</p>
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