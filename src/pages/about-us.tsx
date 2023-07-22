import React from "react";
import Container from "../components/ui/container";
import { Footer, Header } from "../components/generic";
// import { gql, useQuery } from "@apollo/client";
// import client from "../../apolloClient";
// import { graphql, useStaticQuery } from "gatsby";
// import useGetMoreData from "../utils/useGetMoreData";

// export const Wuery = gql`
//   query BlogPost($contentfulId: String!) {
//     pageBlogPost(id: $contentfulId) {
//       id
//       title
//       content
//       featuredImage {
//         file {
//           url
//         }
//         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
//       }
//       publishedDate(fromNow: false)
//       author {
//         avatar {
//           file {
//             url
//           }
//           title
//           gatsbyImageData(
//             layout: FULL_WIDTH
//             placeholder: BLURRED
//             formats: AUTO
//           )
//         }
//       }
//     }
//   }
// `;

export default function AboutUs() {
  const dataInstance = new Date();
  // const [data] = useGetMoreData("4YpnxRJ6o0uhD0pxY7hHRF");
  // React.useEffect(() => {
  //   console.log(data);

  //   const { contentfulPageBlogPost } = data;
  // }, []);

  // console.log(gas);
  // console.log(error?.message);
  // console.log(loading);

  return (
    <main>
      <Header isNeutral={true} />
      <Container>
        <div className="mt-32">
          <h1>Privacy Policy</h1>
          <p>
            At The Front-Rank, we take your privacy seriously. This Privacy
            Policy outlines how we collect, use, and protect your personal
            information when you visit our website and interact with our
            services. By using our website, you agree to the terms of this
            Privacy Policy.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            1.1 Personal Information: When you visit our website, we may collect
            personal information that you voluntarily provide to us, such as
            your name, email address, and any other information you choose to
            provide through our contact forms or newsletter sign-up.
          </p>
          <p>
            1.2 Log Data: We also collect certain information automatically when
            you visit our website, including your IP address, browser type,
            operating system, referring URLs, pages visited, and other usage
            information. This information helps us analyze trends, administer
            the site, and track user engagement.
          </p>
          <h2>2. Use of Information</h2>
          <p>
            2.1 Personal Information: We may use the personal information you
            provide to us to respond to your inquiries, send you newsletters or
            other communications, and provide you with updates, promotions, and
            information related to our website and services. We will not sell or
            share your personal information with third parties for their direct
            marketing purposes without your consent.
          </p>
          <p>
            2.2 Log Data: The information we collect automatically helps us
            improve our website and better understand our users' preferences. It
            may be used to analyze trends, track user engagement, and gather
            demographic information.
          </p>
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            3.1 Cookies: Like many other websites, we use cookies and similar
            tracking technologies to enhance your browsing experience. Cookies
            are small files that are stored on your device and allow us to
            recognize your browser and remember certain information. You can
            modify your browser settings to control the use of cookies or to
            disable them altogether. However, please note that disabling cookies
            may impact your experience on our website.
          </p>
          <h2>4. Third-Party Links</h2>
          <p>
            4.1 Our website may contain links to third-party websites or
            services that are not controlled or operated by us. We are not
            responsible for the privacy practices or content of these
            third-party websites. We encourage you to review the privacy
            policies of these websites before providing any personal
            information.
          </p>
          <h2>5. Data Security</h2>
          <p>
            5.1 We implement appropriate security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, please note that no method of
            transmission over the internet or electronic storage is completely
            secure. We cannot guarantee the absolute security of your
            information.
          </p>
          <h2>6. Children's Privacy</h2>
          <p>
            6.1 Our website is not intended for children under the age of 13. We
            do not knowingly collect personal information from children. If we
            become aware that personal information from a child under the age of
            13 has been collected, we will take appropriate steps to delete it.
          </p>
          <h2>7. Changes to this Privacy Policy</h2>
          <p>
            7.1 We reserve the right to update or modify this Privacy Policy at
            any time. Any changes will be effective immediately upon posting on
            our website. We encourage you to review this Privacy Policy
            periodically to stay informed about our information practices.
          </p>
          <h2>8. Contact Us</h2>
          <p>
            8.1 If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at [insert contact email or
            address].
          </p>
          <p>
            This Privacy Policy was last updated on {dataInstance.getDay()}/
            {dataInstance.getMonth()}/{dataInstance.getFullYear()}.
          </p>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
// export const Puery = graphql`
//   query {
//     contentfulPageBlogPost(contentful_id: { eq: "4YpnxRJ6o0uhD0pxY7hHRF" }) {
//       id
//       title
//       shortDescription {
//         shortDescription
//       }
//       content {
//         raw
//       }
//       featuredImage {
//         file {
//           url
//         }
//         gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
//       }
//       publishedDate(fromNow: false)
//       author {
//         avatar {
//           file {
//             url
//           }
//           title
//           gatsbyImageData(
//             layout: FULL_WIDTH
//             placeholder: BLURRED
//             formats: AUTO
//           )
//         }
//       }
//     }
//   }
// `;

// function newFunction(
//   data: any,
//   setContentString: React.Dispatch<React.SetStateAction<string>>
// ) {
//   try {
//     const posts = data.allContentfulPageBlogPost.nodes;
//     console.log(posts[0]);

//     const fi: [] = JSON.parse(posts[0].content.raw).content;
//     const gas = fi.filter(
//       (each: { nodeType: string }) => each.nodeType === "paragraph"
//     );
//     const extractedValues = gas.map(
//       (item: { content: any }) => item.content[0].value
//     );
//     const concatenatedString = extractedValues.join(" ");
//     setContentString(concatenatedString);
//     console.log(concatenatedString, "concatenatedString");
//   } catch (error) {
//     console.error(error, "error");
//   }
// }
