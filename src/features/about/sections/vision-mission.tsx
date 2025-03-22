import Image from "next/image";

import { Accordion } from "../components/accordion";
import { Heading } from "../components/heading";

export interface AccordionData {
  data: {
    id: string;
    title: string;
    content: string;
  }[];
}

export function VisionMission({ data }: AccordionData) {
  return (
    <section
      className="container grid gap-9 py-12 md:grid-cols-3"
      aria-label="mission and vision"
    >
      <div className="space-y-3 md:col-span-2">
        <Heading id="mission-heading">Mission</Heading>
        <p className="text-lg font-light">
          ALLIED GULF CONSTRUCTION SERVICES W.L.L strives to bring growth to the
          community, using value engineering, effective construction practices
          and hard dedicated work to deliver on commitments.
        </p>

        <p className="text-lg font-light">
          We pledge to establish and maintain a long-lasting relationship with
          all Clients by exceeding their expectations of quality and service
          based on integrity, honesty and superior performance, ensuring
          customer satisfaction and maintaining our commitment to a professional
          work ethic.
        </p>
        <p className="text-lg font-light">
          To create a professional and positive working environment for all our
          employees and ensure customer satisfaction, enhance shareholder worth
          and maintain the exceptional quality performance of our business.
        </p>
      </div>
      <Image src="/images/about-agcs.png" height={384} width={384} alt="" />
      <div className="col-span-2">
        <Accordion data={data} />
      </div>
    </section>
  );
}
