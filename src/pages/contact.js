import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

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
            </Layout>
        )
    }
}

export default Contact