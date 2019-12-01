import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import headerImage1 from '../assets/images/atelier1.jpg'
import headerImage2 from '../assets/images/atelier2.jpg'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import pontonThumb from '../assets/images/thumbs/ponton-thumb.jpeg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/09.jpg'
import thumb10 from '../assets/images/thumbs/10.jpg'
import thumb11 from '../assets/images/thumbs/11.jpg'
import tigreThumb from '../assets/images/thumbs/tigre-thumb.jpeg'
import gorilleThumb from '../assets/images/thumbs/gorille-thumb.jpeg'

import full01 from '../assets/images/thumbs/01.jpg'
import full02 from '../assets/images/thumbs/02.jpg'
import full03 from '../assets/images/thumbs/03.jpg'
import full04 from '../assets/images/thumbs/04.jpg'
import pontonFull from '../assets/images/fulls/ponton-full.jpg'
import full06 from '../assets/images/thumbs/06.jpg'
import full07 from '../assets/images/thumbs/07.jpg'
import full08 from '../assets/images/thumbs/08.jpg'
import full09 from '../assets/images/thumbs/09.jpg'
import full10 from '../assets/images/thumbs/10.jpg'
import full11 from '../assets/images/thumbs/11.jpg'
import tigreFull from '../assets/images/fulls/tigre-full.jpg'
import gorilleFull from '../assets/images/fulls/gorille-full.jpeg'

const DEFAULT_IMAGES = [
    { id: '13', source: gorilleFull, thumbnail: gorilleThumb, caption: 'Le gorille', description: 'Huile sur toile - 60 x 80 - 1200 €' },
    { id: '12', source: tigreFull, thumbnail: tigreThumb, caption: 'La tigresse', description: 'Huile sur toile - 90 x 120 - 900 €' },
    { id: '5', source: pontonFull, thumbnail: pontonThumb, caption: 'Ponton Lac Lésina', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '11', source: full11, thumbnail: thumb11, caption: 'La panthère', description: 'Huile sur palette - 137 x 100 - 900 €' },
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Barque à Lesina 1', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Barque à Lesina 2', description: 'Huile sur palette - 137 x 100 - Déjà vendu'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Barque à Lesina 3', description: 'Huile sur palette - 137 x 100 - 700 €'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Bateau à Burano', description: 'Huile sur palette - 137 x 100 - 700 €'},
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
                        <div id='headerImageDiv' style={styles.headerImageDiv}>
                            <img id='headerImage1' style={styles.headerImage} src={headerImage1} alt="photo de l'artiste"/>
                        </div>
                        <p></p>
                        <p>Bien qu’ayant essayé d’autres matières telles que les pastels ou l’acrylique, c’est l’huile que je préfère.</p>
                        <p>J’apprécie plus particulièrement les grands formats : 130x100 pour les palettes par exemple ou 89x131 pour certaines toiles.</p>
                        <p>Ce qui me plaît avec les palettes c’est leur matière qui me fait penser aux coques des bateaux.</p>
                        <p>Les sujets dépendent de mes lieux de promenade ou de voyage. J’aime aussi photographier les fleurs en macro afin de les reproduire avec tous leurs détails. 
                        Cependant cela ne s’arrête pas là... une vieille façade de maison m’a récemment inspirée et demain? qui sait?</p>
                        <div id='headerImageDiv' style={styles.headerImageDiv}>
                            <img id='headerImage2' style={styles.headerImage} src={headerImage2} alt="photo de l'artiste" />
                        </div>
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

const styles = {
    headerImage: {
        width:'50%',
        borderRadius: '8px',
    },
    headerImageDiv: {
        display: 'flex',
        alignItems: 'centre',
        justifyContent: 'center'
    }
}

export default HomeIndex