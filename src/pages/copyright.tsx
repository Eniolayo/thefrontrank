import React from "react";
import { Footer, Header } from "../components/common";
import Container from "../components/ui/container";

export default function Copyright() {
  const dateInstance = new Date();

  return (
    <main>
      <Header mainHeading={""} subHeading={""} tag={""} isNeutral={true} />
      <Container>
        <div className="mt-32 mb-10">
          <section>
            <h1 className="text-xl font-bold mb-3">The frontrank</h1>
            <p>
              Copyright © {dateInstance.getFullYear()} The frontrank. All Rights
              Reserved.
            </p>
          </section>

          <div className="my-4 space-y-2">
            <p>
              All content, including text, images, graphics, and other media,
              published on this blog is the intellectual property of The
              frontrank, unless otherwise stated. Any unauthorized use,
              reproduction, or distribution of the content on this blog is
              strictly prohibited.
            </p>

            <p>
              You may share links to our blog posts on social media or other
              platforms, but you may not copy, reproduce, or republish the
              content in whole or in part without obtaining prior written
              permission from The frontrank.
            </p>

            <p>
              The opinions expressed in the blog posts on this website are those
              of the authors and do not necessarily reflect the views of The
              frontrank
            </p>

            <p>
              We respect the intellectual property rights of others. If you
              believe that any content on this blog infringes upon your
              copyright, please contact us immediately with the relevant
              details.
            </p>
          </div>
          <section>
            <p>
              For any inquiries regarding content usage or copyright, please
              contact:
            </p>
            <p>The frontrank</p>
            <p>thefrontrank@gmail.com</p>
          </section>

          <div className="mt-2">
            <p>
              Last updated: {dateInstance.getDay()}-{dateInstance.getMonth()}-
              {dateInstance.getFullYear()}.
            </p>
            <p>
              Note: This copyright notice serves as a general statement of
              copyright ownership and does not constitute legal advice. It is
              essential to consult with a legal professional to ensure that your
              website's copyright page complies with relevant laws and
              regulations in your jurisdiction.
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
