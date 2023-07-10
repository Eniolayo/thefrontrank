import React from "react";
import Container from "../../components/ui/container";

export default function InfoSection() {
  return (
    <section className="bg-image my-10">
      <Container>
        <div className="py-32 flex justify-center items-center text-center">
          <div className="text-white space-y-6 py-10">
            <span className="bg-white font-bold font-sans bg-opacity-25 rounded-lg text-sm px-2 py-1 ">
              ADVENTURE
            </span>
            <h2 className="text-5xl max-w-3xl leading-tight font-bold">
              Richird Norton photorealistic rendering as real photos
            </h2>
            <p className="text-secondary-100 max-w-xl mx-auto">
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
            <hr className="w-10 border-y mx-auto" />
            <p>08.08.2021</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
