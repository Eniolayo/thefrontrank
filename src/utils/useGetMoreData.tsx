import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import axios from "axios";

export default function useGetMoreData(id: string) {
  const [data, setData] = React.useState();
  const fetchContentfulData = async (
    contentType: any,
    filterParameters: any
  ) => {
    const spaceId = process.env.NEXT_PUBLIC_SPACE;
    const accessToken = process.env.NEXT_PUBLIC_ACCESSTOKEN;

    const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?content_type='pageBlogPost'&access_token=${accessToken}`;

    try {
      // const response = await axios.get(url, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // });

      // return response.data;
      axios
        .get(url)
        .then((response) => {
          const entries = response.data.items;
          console.log(entries);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching Contentful data:", error);
      return null;
    }
  };

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
