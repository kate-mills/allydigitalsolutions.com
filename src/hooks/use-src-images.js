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
        office: file(relativePath: { eq: "ally-digital-solutions.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 805, width: 569) }
        }
        officeGals: file(relativePath: { eq: "web-developers.jpg" }) {
          img: childImageSharp { gatsbyImageData( layout: CONSTRAINED, placeholder: BLURRED, height: 502, width: 586,) }
        }
        socialMediaSeo: file(relativePath: { eq: "social-media.jpg" }) {
          publicURL
        }
        socialMediaMobile: file(relativePath: { eq: "responsive-social-media.jpg" }) {
          img: childImageSharp { gatsbyImageData( layout:CONSTRAINED, width: 311, height: 668, placeholder: BLURRED) }
        }
        webDevOne: file(relativePath: { eq: "web-development.jpg" }) {
          publicURL
          img: childImageSharp { gatsbyImageData( layout: CONSTRAINED, placeholder: BLURRED, height: 502, width: 586,) }
        }
        webDevTwo: file(relativePath: { eq: "custom-web-development.jpg" }) {
          img: childImageSharp { gatsbyImageData( layout: CONSTRAINED, placeholder: BLURRED, height: 502, width: 586,) }
        }
      }
    `
  );
  return {katePng, office, officeGals, socialMediaSeo, socialMediaMobile, webDevOne, webDevTwo};
};
