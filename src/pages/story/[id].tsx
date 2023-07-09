import React from "react";
import { Header } from "../../components/generic";
import Footer from "../../components/generic/footer";
import Container from "../../components/ui/container";
import { Icon } from "@iconify/react";

export default function Story({ id }: { id: any }): React.JSX.Element {
  return (
    <div>
      <Header isStrory={true} />
      {/* Story {id} */}
      <Container>
        <div className="mt-24 space-y-10 text-lg max-w-[900px] mx-auto">
          <div className="flex justify-between">
            <p>08.08.2021</p>
            <p>4 minutes read</p>
          </div>
          <p>
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios.
          </p>
          <p>
            Synergistically drive e-business leadership with unique synergy.
            Compellingly seize market positioning ROI and bricks-and-clicks
            e-markets. Proactively myocardinate timely platforms through
            distributed ideas. Professionally optimize enabled core competencies
            for leading-edge sources. Professionally enhance stand-alone
            leadership with innovative synergy. Rapidiously generate backend
            experiences vis-a-vis long-term high-impact relationships.
          </p>
          <p>
            Efficiently empower seamless meta-services with impactful
            opportunities. Distinctively transition virtual outsourcing with
            focused e-tailers.
          </p>
          <p className="text-5xl text-primary-100 font-black leading-tight">
            “ Monotonectally seize superior mindshare rather than efficient
            technology. ”
          </p>
          <p>
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
          </p>
          <div className="flex gap-3">
            {["ADVENTURE", "PHOTO", "DESIGN"].map((item) => (
              <span
                className="text-sm py-2 px-3 rounded-lg border border-secondary-100 font-bold text-secondary-300"
                key={item}
              >
                {item}
              </span>
            ))}{" "}
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="">
              <p>By Jennifer Lawrence</p>
              <p>Thinker & Designer</p>
            </div>
            <ul className="flex flex-col md:flex-row gap-4 items-center border-t md:border-t-0 pt-3 md:pt-0 md:border-l pl-3">
              {SocialIcon.map((each: string) => (
                <li key={each}>
                  <Icon icon={each} fontSize={25} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
const SocialIcon: string[] = ["ic:round-facebook", "uim:twitter"];
