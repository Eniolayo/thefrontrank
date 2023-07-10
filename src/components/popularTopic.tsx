import { Link, graphql, useStaticQuery } from "gatsby";
import Container from "./ui/container";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PopularTopic() {
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
          <div className="flex justify-center"></div>
          <div className="flex pt-6 flex-wrap justify-between">
            <ul className="hidden md:flex gap-4 flex-wrap">
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
            <SelectMenu />

            <a href="#">View All</a>
          </div>
          <section className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))] gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <Link
                to={"/story/kAMV2VZ2e"}
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
              </Link>
            ))}
          </section>
        </section>
      </main>
    </Container>
  );

  function SelectMenu() {
    return (
      <div className="md:hidden xl:w-96">
        <select
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          {[
            "All",
            "Adventure",
            "Travel",
            "Fashion",
            "Technology",
            "Branding",
          ].map((item) => (
            <option defaultValue={item == "All" ? 1 : 0} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
