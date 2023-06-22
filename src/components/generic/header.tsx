import React from "react";
import { WebsiteLogo } from "../../images/svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="max-w-[200px] w-[90%]">
        <WebsiteLogo />
      </div>
      <nav>
        <ul className="flex gap-5 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Articles</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
