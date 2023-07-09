import React, { ComponentProps } from "react";
import { WebsiteLogo } from "../../images/svg";
import { Icon } from "@iconify/react";
import Container from "../ui/container";
import "../../styles/global.css";

export default function Header(): JSX.Element {
  // Change the bg opacity when we start scrolling
  return (
    <header className="bg-image">
      <div className="bg-white fixed top-0 z-50 w-full bg-opacity-40">
        <Container>
          <div className="flex justify-between items-center py-5 ">
            <div className="max-w-[200px] w-[90%]">
              <WebsiteLogo />
            </div>
            <nav className="flex gap-5 items-center">
              <ul className="flex gap-5 items-center">
                {NavLinks.map((each: string) => (
                  <li key={each}>{each}</li>
                ))}
              </ul>
              <ul className="flex gap-4 items-center border-l pl-3">
                {SocialIcon.map((each: string) => (
                  <li>
                    <Icon icon={each} key={each} fontSize={25} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div className="pt-64 py-10">
        <Container>
          <div className="text-white space-y-6 py-10">
            <span className="bg-white font-bold font-sans bg-opacity-25 rounded-lg text-sm px-2 py-1 ">
              ADVENTURE
            </span>
            <h2 className="text-5xl max-w-3xl leading-tight font-bold">
              Richird Norton photorealistic rendering as real photos
            </h2>
            <p className="text-secondary-100 max-w-2xl">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
const SocialIcon: string[] = ["ic:round-facebook", "uim:twitter"];
const NavLinks: string[] = ["Home", "About", "Articles", "Contact Us"];
