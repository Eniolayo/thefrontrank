import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function useGetMoreData(id: string) {
  const [data, setData] = React.useState();

  const res = useStaticQuery(graphql`
    query {
      contentfulPageBlogPost(contentful_id: { eq: "4YpnxRJ6o0uhD0pxY7hHRF" }) {
        id
        title
        shortDescription {
          shortDescription
        }
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
      }
    }
  `);
  setData(res);
  return [data];
}
