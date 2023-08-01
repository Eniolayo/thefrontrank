import React from "react";
import { WebsiteLogo } from "../../images/svg";
import { Icon } from "@iconify/react";
import Container from "../ui/container";
import "../../styles/global.css";
import { Link } from "gatsby";

export default function Header({
  mainHeading,
  subHeading,
  tag,
  isStory = false,
  isNeutral = false,
}: {
  mainHeading: string;
  subHeading: string;
  tag: string;
  isStory?: boolean;
  isNeutral?: boolean;
}): JSX.Element {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const genericHamburgerLine = `
  h-1 
  w-6 
  my-1 
  rounded-full 
  bg-black 
  transition 
  ease 
  transform 
  duration-300
`;
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="bg-image">
      <div
        className={`bg-white fixed top-0 z-50 w-full ${
          isScrolled ? "bg-opacity-100 shadow-lg" : "bg-opacity-40"
        } transition-all`}
      >
        <Container>
          <div className="flex justify-between items-center py-5 ">
            <Link to="/" className="max-w-[270px] w-[90%]">
              <WebsiteLogo />
            </Link>
            <nav
              className={`w-[100%] inset-x-0 md:w-fit absolute top-full p-8 md:p-0 bg-white bg-opacity-80 shadow-lg md:shadow-none md:bg-transparent md:flex md:relative justify-between z-50 ${
                isOpen ? "scale-y-100" : "scale-y-0"
              } md:scale-100 origin-top transition-all duration-300 gap-5`}
            >
              <ul className="flex flex-col md:flex-row gap-5 items-center">
                {NavLinks.map((each) => (
                  <li key={each.title}>
                    <Link to={each.url}>{each.title}</Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col md:flex-row gap-4 items-center border-t md:border-t-0 pt-3 md:pt-0 md:border-l pl-3">
                {SocialIcon.map((each: string) => (
                  <li key={each}>
                    <Icon icon={each} fontSize={25} />
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className={` flex flex-col h-11 w-11 border-2 rounded justify-center border-black items-center group md:hidden`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? `rotate-45 translate-y-3 group-hover:opacity-100`
                    : `group-hover:opacity-100`
                }`}
              />
              <span
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "group-hover:opacity-100"
                }`}
              />
              <span
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? `-rotate-45 -translate-y-3 group-hover:opacity-100`
                    : `group-hover:opacity-100`
                }`}
              />
            </button>
          </div>
        </Container>
      </div>
      {isNeutral ? null : isStory ? (
        <div className="pt-64 py-10">
          <Container>
            <div className="text-white text-center space-y-6 py-10">
              <span className="bg-white font-bold font-sans uppercase bg-opacity-25 rounded-lg text-sm px-2 py-1 ">
                {tag || "FASHION"}
              </span>
              <h2 className="text-5xl max-w-3xl mx-auto leading-tight font-bold">
                {mainHeading || "Richird Norton"}
              </h2>
              <p className="text-secondary-100 max-w-2xl mx-auto">
                {subHeading ||
                  `Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.`}
              </p>
              <p className="text-secondary-100 max-w-2xl font-black text-xl mx-auto">
                By Jennifer Lawrence
              </p>
            </div>
          </Container>
        </div>
      ) : (
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
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

const SocialIcon: string[] = ["ic:round-facebook", "uim:twitter"];

const NavLinks: {
  title: string;
  url: string;
}[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about-us" },
  { title: "Articles", url: "/" },
  { title: "Contact Us", url: "/" },
];
// Thefrontrank122
