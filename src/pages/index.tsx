import * as React from "react";
import type { HeadFC } from "gatsby";
import { Header, Footer } from "../components/generic";
import "../styles/global.css";
import { InfoSection, EditorPick, PopularTopic } from "../components/";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <PopularTopic />
      <InfoSection />
      <EditorPick />
      <Footer />
    </div>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
