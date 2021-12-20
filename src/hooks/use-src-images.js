import { useStaticQuery, graphql } from "gatsby";

export const useSrcImages = () => {
  const {
    contactPage,
    katePng,
    office,
    officeGals,
    socialMedia,
    socialMediaMobile,
    webDevOne,
    webDevTwo
  } = useStaticQuery(
    graphql`
      {

        contactPage: file(relativePath: { eq: "contact-page.png" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        katePng: file(relativePath: { eq: "meet-kate.png" }) {
          publicURL
          img: childImageSharp { gatsbyImageData(backgroundColor: "silver") }
        }
        office: file(relativePath: { eq: "office.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        officeGals: file(relativePath: { eq: "web-developers-in-office.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        socialMedia: file(relativePath: { eq: "social-media-x2.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        socialMediaMobile: file(relativePath: { eq: "social-media-mobile.jpg" }) {
          publicURL
          img: childImageSharp {
            gatsbyImageData(
            placeholder: BLURRED
            quality: 100
            )
          }
        }
        webDevOne: file(relativePath: { eq: "web-developer-01r-x2.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }
        webDevTwo: file(relativePath: { eq: "web-developer-02r-x2.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData }
        }

      }
    `
  );
  return {contactPage, katePng, office, officeGals, socialMedia, socialMediaMobile, webDevOne, webDevTwo};
};


//import { GatsbyImage, getImage } from "gatsby-plugin-image";
//import {useSrcImages} from 'hooks/use-src-images'
//const {contactPage, katePng, office, officeGals, webDevOne, webDevTwo, socialMedia }  = useSrcImages()


//web-dev-02: Web Developer wearing shades, sitting on steps of an office building alongside her purse.

//web-dev-01: Web Developer wearing a hat, sitting on steps of an office building with a leather jacket over her shoulder.
