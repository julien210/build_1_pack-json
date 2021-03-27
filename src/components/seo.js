import { graphql ,  useStaticQuery} from 'gatsby'

const SEO = ({ title, description, image, article }) => {

  const { site } = useStaticQuery(query)
  return null
}
export default SEO
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
     
      }
    }
  }
`