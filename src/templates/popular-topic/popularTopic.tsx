import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Card from "../../components/common/card";
import Container from "../../components/ui/container";

export default function PopularTopic({ dat }: { dat: any }): React.JSX.Element {
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
            {dat.map((each: any, index: React.Key | null | undefined) => (
              <Card
                name={each.internalName}
                key={index}
                url={each.contentful_id}
                data={data}
                desc={each.shortDescription.shortDescription}
                img={each.featuredImage.gatsbyImageData}
                date={each.publishedDate}
              />
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
