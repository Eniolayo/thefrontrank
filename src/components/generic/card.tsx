import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function Card({
  data,
  url,
}: {
  data: any;
  url: string;
}): React.JSX.Element {
  return (
    <Link
      to={`/story/${url}`}
      className="max-w-[370px] rounded-lg overflow-hidden hover:shadow-lg transition-all space-y-3 relative mx-auto block"
    >
      <GatsbyImage
        image={data.image.childImageSharp.gatsbyImageData}
        alt="My Image"
        className="h-60 rounded-lg"
      />
      <span className="bg-black font-bold absolute top-0 right-3 font-sans bg-opacity-40 text-white rounded-lg text-sm px-2 py-1 ">
        ADVENTURE
      </span>
      <div className="p-2 space-y-3">
        <p>08.08.2021</p>
        <h3 className="text-[1.4rem] font-bold leading-none text-secondary-200">
          Dream destinations to visit this year in Paris
        </h3>
        <p className="text-secondary-300 text-sm">
          Progressively incentivize cooperative systems through technically
          sound functionalities. Credibly productivate seamless data with
          flexible schemas.
        </p>
      </div>
    </Link>
  );
}
