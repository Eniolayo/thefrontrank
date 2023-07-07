import React from "react";
import { WebsiteLogo } from "../../images/svg";
import { Icon, IconProps } from "@iconify/react";
import Container from "../ui/container";

export default function Header(): JSX.Element {
  return (
    <header className="bg-black bg-opacity-30">
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
            <ul className="flex gap-5 items-center border-l pl-2">
              {SocialIcon.map(
                (each: string): React.ReactElement<IconProps, string> => (
                  <Icon icon={each} key={each} />
                )
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
const SocialIcon: string[] = ["ic:round-facebook", "uim:twitter"];
const NavLinks: string[] = ["Home", "About", "Articles", "Contact Us"];
