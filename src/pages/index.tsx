import * as React from "react";
import { type HeadFC, graphql } from "gatsby";
import { Header, Footer } from "../components/common";
import "../styles/global.css";
import { InfoSection, EditorPick, PopularTopic } from "../templates";

export default function IndexPage({ data }: { data: any }) {
  const [contentString, setContentString] = React.useState([]);
  const [content, setContent] = React.useState({
    heading: "",
    subHeading: "",
    mainSection: "",
    tag: "",
  });

  React.useEffect(() => {
    try {
      const posts = data.allContentfulPageBlogPost.nodes;
      // console.log(posts[0].contentful_id);
      setContentString(posts);
      console.log(posts[0]);

      setContent({
        heading: posts[0].internalName,
        subHeading: posts[0].shortDescription.shortDescription,
        mainSection: "",
        tag: "",
      });
    } catch (error) {
      console.error(error, "error");
    }
  }, []);
  return (
    <div>
      <Header
        mainHeading={content.heading}
        tag={""}
        subHeading={content.subHeading}
      />
      <PopularTopic dat={contentString} />
      <InfoSection />
      <EditorPick />
      <Footer />
    </div>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    allContentfulPageBlogPost {
      nodes {
        internalName
        content {
          raw
        }
        featuredImage {
          file {
            url
          }
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: AUTO
          )
        }
        shortDescription {
          shortDescription
        }
        publishedDate(fromNow: false)
        author {
          avatar {
            file {
              url
            }
            title
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: AUTO
            )
          }
        }
        contentful_id
      }
    }
  }
`;
