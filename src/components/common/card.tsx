import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { STORY_DETAILS } from "../../config/link";

export default function Card({
  data,
  url,
  name,
  desc,
  img,
  date,
}: {
  data: any;
  url: string;
  name: string;
  desc: string;
  img: any;
  date: string;
}): React.JSX.Element {
  return (
    <Link
      to={STORY_DETAILS(url)}
      className="max-w-[370px] rounded-lg overflow-hidden hover:shadow-lg transition-all space-y-3 relative mx-auto block"
    >
      <GatsbyImage image={img} alt={name} className="h-60 rounded-lg" />
      {/* <span className="bg-black font-bold absolute top-0 right-3 font-sans bg-opacity-40 text-white rounded-lg text-sm px-2 py-1 ">
        ADVENTURE
      </span> */}
      <div className="p-2 space-y-3">
        <p>{date}</p>
        {/* <p>08.08.2021</p> */}
        <h3 className="text-[1.4rem] font-bold leading-none text-secondary-200">
          {name}
        </h3>
        <p className="text-secondary-300 text-sm">{desc}</p>
      </div>
    </Link>
  );
}
