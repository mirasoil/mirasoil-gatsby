import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                name
            }
        }
    }
`)
    return (
        <div>
            <p>Created by {data.site.siteMetadata.name} C2021</p>
        </div>
    )
}

export default Footer