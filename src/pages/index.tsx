import * as React from "react";
import { type HeadFC, graphql } from "gatsby";
import { Header, Footer } from "../components/generic";
import "../styles/global.css";
import { InfoSection, EditorPick, PopularTopic } from "../templates";
import { Entry } from "contentful";

export default function IndexPage({ data }: { data: any }) {
  const [contentString, setContentString] = React.useState([]);
  const [content, setContent] = React.useState<Entry<any>[]>([]);

  React.useEffect(() => {
    try {
      const posts = data.allContentfulPageBlogPost.nodes;
      console.log(posts[0].contentful_id);
      setContentString(posts);
      const res = posts.map((each: any) => {
        const gf = JSON.parse(each.content.raw).content;
        const gas = gf.filter(
          (each: { nodeType: string }) => each.nodeType === "paragraph"
        );
        const extractedValues = gas.map(
          (item: { content: any }) => item.content[0].value
        );
        return extractedValues.join(" ");
      });
      // console.log(res);
      // internalName
      // publishedDate
      // shortDescription.shortDescription
    } catch (error) {
      console.error(error, "error");
    }
  }, []);
  return (
    <div>
      <Header />
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
