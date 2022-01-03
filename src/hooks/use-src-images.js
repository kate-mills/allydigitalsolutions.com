import { useStaticQuery, graphql } from "gatsby";

export const useSrcImages = () => {
  const {
    katePng,
    office,
    officeGals,
    socialMediaSeo,
    socialMediaMobile,
    webDevOne,
    webDevTwo
  } = useStaticQuery(
    graphql`
      {

        katePng: file(relativePath: { eq: "meet-kate.png" }) {
          img: childImageSharp { gatsbyImageData(layout: CONSTRAINED, width: 586, height: 341, backgroundColor: "#BBB7B5", quality: 100) }
        }
        office: file(relativePath: { eq: "office.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 805, width: 569) }
        }
        officeGals: file(relativePath: { eq: "web-developers-in-office.jpg" }) {
          img: childImageSharp { gatsbyImageData( layout: CONSTRAINED, placeholder: BLURRED, height: 502, width: 586,) }
        }
        socialMediaSeo: file(relativePath: { eq: "social-media-x2.jpg" }) {
          publicURL
        }
        socialMediaMobile: file(relativePath: { eq: "social-media-mobile.jpg" }) {
          img: childImageSharp { gatsbyImageData( layout:CONSTRAINED, width: 311, height: 668, placeholder: BLURRED) }
        }
        webDevOne: file(relativePath: { eq: "web-developer-01r-x2.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData( layout: CONSTRAINED, placeholder: BLURRED, height: 502, width: 586,) }
        }
        webDevTwo: file(relativePath: { eq: "web-developer-02r-x2.jpg" }) {
          img: childImageSharp { gatsbyImageData( layout: CONSTRAINED, placeholder: BLURRED, height: 502, width: 586,) }
        }
      }
    `
  );
  return {katePng, office, officeGals, socialMediaSeo, socialMediaMobile, webDevOne, webDevTwo};
};

//import { GatsbyImage, getImage } from "gatsby-plugin-image";
//import {useSrcImages} from 'hooks/use-src-images'
//const { katePng, office, officeGals, webDevOne, webDevTwo, socialMedia }  = useSrcImages()

//web-dev-02: Web Developer wearing shades, sitting on steps of an office building alongside her purse.

//web-dev-01: Web Developer wearing a hat, sitting on steps of an office building with a leather jacket over her shoulder.
