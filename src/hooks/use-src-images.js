import { useStaticQuery, graphql } from "gatsby";

export const useSrcImages = () => {
  const {katePng, office, webDevOne, webDevTwo, socialMedia, contactPage} = useStaticQuery(
    graphql`
      {

        katePng: file(relativePath: { eq: "meet-kate.png" }) {
          publicURL
          img: childImageSharp { gatsbyImageData(backgroundColor: "silver") }
        }
        office: file(relativePath: { eq: "office.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        webDevOne: file(relativePath: { eq: "web-developer-01.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        webDevTwo: file(relativePath: { eq: "web-developer-02.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        socialMedia: file(relativePath: { eq: "social-media.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        contactPage: file(relativePath: { eq: "contact-page.png" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }

      }
    `
  );
  return {katePng, office, webDevOne, webDevTwo, socialMedia, contactPage};
};
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
//import {useSrcImages} from 'hooks/use-src-images'
//const { katePng, office, webDevOne, webDevTwo, socialMedia }  = useSrcImages()
