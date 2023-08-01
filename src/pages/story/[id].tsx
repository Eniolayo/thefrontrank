import React from "react";
import { Header, Footer } from "../../components/common";
import Container from "../../components/ui/container";
import { Icon } from "@iconify/react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Card from "../../components/common/card";
import axios from "axios";

export default function Story({
  id,
  data,
}: {
  id: string;
  data: any;
}): React.JSX.Element {
  const [content, setContent] = React.useState({
    heading: "",
    subHeading: "",
    mainSection: "",
    tag: "",
    date: "",
    estimatedTime: 0,
  });

  const daa = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-bg.avif" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  React.useEffect(() => {
    const fetchContentfulData = async () => {
      const spaceId = process.env.CONTENTFUL_SPACE_ID;
      const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
      const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?content_type=pageBlogPost&sys.id=${id}&access_token=${accessToken}`;

      try {
        axios
          .get(url)
          .then((response) => {
            const entry = response.data.items[0];
            console.log(entry);
            const contentArray = entry.fields.content.content;

            const filteredContent = contentArray.filter(
              (each: { nodeType: string }) => each.nodeType === "paragraph"
            );
            const extractedValues = filteredContent.map(
              (item: { content: any }) => item.content[0].value
            );
            setContent({
              heading: entry.fields.internalName,
              subHeading: entry.fields.shortDescription,
              mainSection: extractedValues.join(" "),
              tag: entry?.metadata?.tags[0]?.sys.id,
              date: entry.sys.createdAt,
              estimatedTime: calculateReadingTime(extractedValues.join(" ")),
            });
            console.log(entry.sys.createdAt, "entry.sys.createdAt");

            return extractedValues.join(" ");
          })
          .catch((error) => {
            console.error("Error fetching content entry:", error);
          });
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
        return null;
      }
    };
    fetchContentfulData();
  }, []);

  return (
    <div>
      <Header
        mainHeading={content.heading}
        tag={content.tag}
        isStory={true}
        subHeading={content.subHeading}
      />
      <Container>
        <div className="mt-24 space-y-10 text-lg max-w-[900px] mx-auto">
          <div className="flex justify-between">
            <p>
              {new Date(content.date)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
                .replaceAll("/", ".")}
            </p>
            <p>{content.estimatedTime} minutes read</p>
          </div>
          <p>{content.mainSection}</p>

          <div className="flex flex-col lg:flex-row gap-10">
            <GatsbyImage
              image={daa.image.childImageSharp.gatsbyImageData}
              alt="My Image"
              className="h-72 flex-1 rounded-lg"
            />
            <GatsbyImage
              image={daa.image.childImageSharp.gatsbyImageData}
              alt="My Image"
              className="h-72 flex-1 rounded-lg"
            />
          </div>
          <p className="text-5xl text-primary-100 font-black leading-tight">
            “ Monotonectally seize superior mindshare rather than efficient
            technology. ”
          </p>

          <div className="flex gap-3">
            {["ADVENTURE", "PHOTO", "DESIGN"].map((item) => (
              <span
                className="text-sm py-2 px-3 rounded-lg border border-secondary-100 font-bold text-secondary-300"
                key={item}
              >
                {item}
              </span>
            ))}{" "}
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <GatsbyImage
                image={daa.image.childImageSharp.gatsbyImageData}
                alt="My Image"
                className="h-20 w-20 rounded-full flex-1"
              />
              <div className="">
                <p>By Jennifer Lawrence</p>
                <p>Thinker & Designer</p>
              </div>
            </div>
            <ul className="flex flex-col md:flex-row gap-4 items-center border-t md:border-t-0 pt-3 md:pt-0 md:border-l pl-3">
              {SocialIcon.map((each: string) => (
                <li key={each}>
                  <Icon icon={each} fontSize={25} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <div className="space-y-8 mt-32 mb-10">
          <h4 className="font-bold text-2xl text-secondary-200">
            Related Posts
          </h4>
          <section className="flex justify-center items-center flex-wrap gap-6">
            {/* {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} url="kAMV2VZ2e" data={data} />
            ))} */}
          </section>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
const SocialIcon: string[] = ["ic:round-facebook", "uim:twitter"];

function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 60
): number {
  const words: string[] = text.split(/\s+/);
  const readingTimeMinutes: number = Math.ceil(words.length / wordsPerMinute);
  return readingTimeMinutes;
}
