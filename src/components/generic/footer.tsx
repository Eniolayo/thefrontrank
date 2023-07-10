import React from "react";
import Container from "../ui/container";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import { WebsiteLogo } from "../../images/svg";

export default function Footer() {
  const dateInstance = new Date();

  return (
    <footer>
      <div className="bg-secondary-400 py-8">
        <Container>
          <div className="flex gap-10 flex-wrap lg:justify-between flex-col md:flex-row items-start py-10 text-white">
            <div className="w-[265px] h-16 pt-1 px-2 rounded-md bg-slate-50 text-black">
              <WebsiteLogo />
            </div>
            <AboutUsSection />
            <ContactAndLegal />
            <PopularTopics />
            <FollowLinks />
          </div>
        </Container>
      </div>
      <div className="bg-secondary-500 py-8">
        <Container>
          <div className="flex justify-between text-white items-center">
            <p>
              Copyright © {dateInstance.getFullYear()} | The Front-Rank . All
              rights reserved{" "}
            </p>
            <Link to="/">Subscribe Now</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FollowLinks() {
  return (
    <ul className="flex gap-2">
      {["ic:sharp-facebook", "mdi:twitter", "ph:instagram-logo-fill"].map(
        (item) => (
          <li key={item}>
            <Link to="/">
              <Icon icon={item} color="#ffffff" fontSize={"30px"} />
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
function AboutUsSection() {
  return (
    <ul className="space-y-2">
      {AboutUs.map((item) => (
        <li key={item.name}>
          <Link className="capitalize" to={"/"}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactAndLegal() {
  return (
    <ul className="space-y-2">
      {Contact.map((item) => (
        <li key={item}>
          <Link to={"/"} className="capitalize">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
function PopularTopics() {
  return (
    <ul className="space-y-2">
      {Popular.map((item) => (
        <li key={item}>
          <Link to={"/"} className="capitalize">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const AboutUs = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/" },
  { name: "Contact Us", link: "/" },
];
const Contact = [
  "Advertise",
  "Copyright",
  "Privacy Policy",
  "Terms and Conditions",
];
const Popular = ["Travel", "Fashion", "Branding", "Adventure", "Technology"];
