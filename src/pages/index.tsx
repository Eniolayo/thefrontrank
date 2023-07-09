import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/generic";
import Container from "../components/ui/container";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { WebsiteLogo } from "../images/svg";
import { Icon } from "@iconify/react";
import Footer from "../components/generic/footer";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <PopularTopic />
      <section className="bg-image my-10">
        <Container>
          <div className="py-32 flex justify-center items-center text-center">
            <div className="text-white space-y-6 py-10">
              <span className="bg-white font-bold font-sans bg-opacity-25 rounded-lg text-sm px-2 py-1 ">
                ADVENTURE
              </span>
              <h2 className="text-5xl max-w-3xl leading-tight font-bold">
                Richird Norton photorealistic rendering as real photos
              </h2>
              <p className="text-secondary-100 max-w-xl mx-auto">
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
              <hr className="w-10 border-y mx-auto" />
              <p>08.08.2021</p>
            </div>
          </div>
        </Container>
      </section>
      <EditorPick />
      <Footer />
    </div>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;

function EditorPick() {
  return (
    <Container>
      <div className="space-y-8 mt-32 mb-10">
        <h2 className="font-bold text-4xl">Editor’s Pick</h2>
        <section className="flex justify-center items-center flex-wrap gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="bg-image relative p-8 max-w-md mx-auto rounded-lg text-white pt-32 space-y-2"
              key={index}
            >
              <span className="bg-black font-bold absolute top-3 right-3 font-sans bg-opacity-40 text-white rounded-lg text-sm px-2 py-1 ">
                ADVENTURE
              </span>
              <p>08.08.2021</p>
              <h4 className="text-2xl font-bold">
                Richird Norton photorealistic rendering as real photos
              </h4>
              <p className="text-sm">
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
}

function PopularTopic() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-bg.avif" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <Container>
      <main>
        <section className="pt-28">
          <h2 className="font-bold text-4xl">Popular topics</h2>
          <div className="flex pt-6 justify-between">
            <ul className="flex gap-4">
              {[
                "All",
                "Adventure",
                "Travel",
                "Fashion",
                "Technology",
                "Branding",
              ].map((item) => (
                <li
                  key={item}
                  className={`${
                    item == "All" ? "text-primary-100" : ""
                  } font-bold`}
                >
                  <button>{item}</button>
                </li>
              ))}
            </ul>
            <a href="#">View All</a>
          </div>
          <section className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))] gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                className="max-w-[370px] space-y-3 relative mx-auto"
                key={index}
              >
                <GatsbyImage
                  image={data.image.childImageSharp.gatsbyImageData}
                  alt="My Image"
                  className="h-60 rounded-lg"
                />
                <span className="bg-black font-bold absolute top-0 right-3 font-sans bg-opacity-40 text-white rounded-lg text-sm px-2 py-1 ">
                  ADVENTURE
                </span>
                <p>08.08.2021</p>
                <h3 className="text-2xl font-bold text-secondary-200">
                  Dream destinations to visit this year in Paris
                </h3>
                <p className="text-secondary-300 text-sm">
                  Progressively incentivize cooperative systems through
                  technically sound functionalities. Credibly productivate
                  seamless data with flexible schemas.
                </p>
              </div>
            ))}
          </section>
        </section>
      </main>
    </Container>
  );
}
