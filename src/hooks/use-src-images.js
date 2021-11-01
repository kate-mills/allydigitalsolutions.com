import { useStaticQuery, graphql } from "gatsby";

export const useSrcImages = () => {
  const {katePng, office} = useStaticQuery(
    graphql`
      {
        katePng: file(relativePath: { eq: "meet-kate.png" }) {
          publicURL
          img: childImageSharp { gatsbyImageData(backgroundColor: "silver") }
        }
        office: file(relativePath: { eq: "office-tall.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }

      }
    `
  );
  return {katePng, office};
};
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
//import {useSrcImages} from 'hooks/use-src-images'
//const {katePng, office}  = useSrcImages()
