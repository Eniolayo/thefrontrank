import React from "react";
import Container from "../../components/ui/container";
import { Link } from "gatsby";

export default function EditorPick() {
  return (
    <Container>
      <div className="space-y-8 mt-32 mb-10">
        <h2 className="font-bold text-4xl">Editor’s Pick</h2>
        <section className="flex justify-center items-center flex-wrap gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Link
              to="/"
              className="bg-image relative p-8 max-w-md mx-auto rounded-lg text-white pt-32 space-y-2"
              key={index}
            >
              <span className="bg-black font-bold absolute top-3 right-3 font-sans bg-opacity-40 text-white rounded-lg text-sm px-2 py-1 ">
                ADVENTURE
              </span>
              <p>08.08.2021</p>
              <h4 className="text-2xl font-bold">
                Richird Norton photorealistic rendering as real photos
              </h4>
              <p className="text-sm">
                Progressively incentivize cooperative systems through
                technically sound functionalities. The credibly productivate
                seamless data.
              </p>
            </Link>
          ))}
        </section>
      </div>
    </Container>
  );
}
