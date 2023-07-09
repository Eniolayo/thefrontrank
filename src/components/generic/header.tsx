import React from "react";
import { WebsiteLogo } from "../../images/svg";
import { Icon } from "@iconify/react";
import Container from "../ui/container";
import "../../styles/global.css";
import { Link } from "gatsby";

export default function Header(): JSX.Element {
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
    // Check if the page has been scrolled
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    // Attach scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
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
            <div className="max-w-[200px] w-[90%]">
              <WebsiteLogo />
            </div>
            <nav
              className={`w-[100%] inset-x-0 md:w-fit absolute top-full p-8 md:p-0 bg-white bg-opacity-80 shadow-lg md:shadow-none md:bg-transparent md:flex md:relative justify-between z-50 ${
                isOpen ? "scale-y-100" : "scale-y-0"
              } md:scale-100 origin-top transition-all duration-300 gap-5`}
            >
              <ul className="flex flex-col md:flex-row gap-5 items-center">
                {NavLinks.map((each: string) => (
                  <li key={each}>
                    <Link to="/">{each}</Link>
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
