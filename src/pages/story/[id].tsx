import React from "react";
import { Header, Footer } from "../../components/generic";
import Container from "../../components/ui/container";
import { Icon } from "@iconify/react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Story({ id }: { id: any }): React.JSX.Element {
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
    <div>
      <Header isStory={true} />
      {/* Story {id} */}
      <Container>
        <div className="mt-24 space-y-10 text-lg max-w-[900px] mx-auto">
          <div className="flex justify-between">
            <p>08.08.2021</p>
            <p>4 minutes read</p>
          </div>
          <p>
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios.
          </p>
          <p>
            Synergistically drive e-business leadership with unique synergy.
            Compellingly seize market positioning ROI and bricks-and-clicks
            e-markets. Proactively myocardinate timely platforms through
            distributed ideas. Professionally optimize enabled core competencies
            for leading-edge sources. Professionally enhance stand-alone
            leadership with innovative synergy. Rapidiously generate backend
            experiences vis-a-vis long-term high-impact relationships.
          </p>
          <p>
            Efficiently empower seamless meta-services with impactful
            opportunities. Distinctively transition virtual outsourcing with
            focused e-tailers.
          </p>
          <div className="flex gap-10">
            <GatsbyImage
              image={data.image.childImageSharp.gatsbyImageData}
              alt="My Image"
              className="h-72 flex-1 rounded-lg"
            />
            <GatsbyImage
              image={data.image.childImageSharp.gatsbyImageData}
              alt="My Image"
              className="h-72 flex-1 rounded-lg"
            />
          </div>
          <p className="text-5xl text-primary-100 font-black leading-tight">
            “ Monotonectally seize superior mindshare rather than efficient
            technology. ”
          </p>
          <p>
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
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
                image={data.image.childImageSharp.gatsbyImageData}
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
            {Array.from({ length: 3 }).map((_, index) => (
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
        </div>
      </Container>
      <Footer />
    </div>
  );
}
const SocialIcon: string[] = ["ic:round-facebook", "uim:twitter"];
