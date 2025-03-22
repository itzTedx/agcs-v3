import { Metadata } from "next";

import { Cta } from "@/components/global/cta";
import { Heading } from "@/features/about/components/heading";
import { Header } from "@/features/about/sections/header";
import { VisionMission } from "@/features/about/sections/vision-mission";

const meta = {
  title: "Construction & Trading Company Bahrain -  A Bit About AGCS",
  description:
    "Allied Gulf Construction Services is a leading construction and trading company in Bahrain and Middle East, specializing in sustainable construction, project management, and quality construction materials supply. We deliver excellence through value engineering and dedicated workmanship.",
  keywords:
    "allied gulf construction services, AGCS Bahrain, construction company middle east, sustainable construction, construction materials supplier, project management bahrain, BCR UK partner, construction services bahrain, quality management ISO 9001:2015, green construction middle east",
  url: "https://www.alliedgulf.me/about",
  image: "https://www.alliedgulf.me/og-img.jpg",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.image],
    type: "website",
    locale: "en_US",
    siteName: "Allied Gulf Construction Services",
    url: meta.url,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.image],
  },
  alternates: {
    canonical: meta.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const accordionData = [
  {
    id: "item-1",
    title: "Esteemed by our Employees",
    content:
      "Employees will be proud to work at Allied Gulf Construction Services W.L.L since we provide opportunities for growth succession and rewards based on achievements.",
  },
  {
    id: "item-2",
    title: "Valued by our Clients and Partners",
    content:
      "Our Clients and Partners will value working with Allied Gulf Construction Services W.L.L since we deliver all our projects on a timely basis and with the highest quality standards specified.",
  },
  {
    id: "item-3",
    title: "Respected by our Community",
    content:
      "We strive to protect the environment and the community in all of our business dealings. We aim for the Community to regard Allied Gulf Construction as a responsible member of society that fosters the sound management of resources and protection of the environment.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Header />
      <article className="prose prose-lg mx-auto">
        <VisionMission data={accordionData} />

        <section
          className="container py-12"
          aria-labelledby="quality-safety-heading"
        >
          <div className="space-y-3">
            <Heading id="quality-safety-heading">Quality & Safety</Heading>
            <p className="text-lg font-light">
              It is the Company's policy to strictly maintain the quality
              management system on all our projects notwithstanding the project
              value, which can be either big or small. Quality is the utmost
              criterion from strict compliance of project management.
            </p>
            <p className="text-lg font-light">
              At Allied Gulf, we are committed to delivering superior quality
              products and services promptly to our clients. It is the basis of
              our success. We have implemented a Quality Management System
              according to the standards set forth by ISO 9001:2015 that is
              rigorously implemented across all company locations and is
              executed by all employees, from senior managers to labourers. Our
              System is regularly subjected to management review to ensure that
              all our levels of quality match or exceed our customers'
              expectations.
            </p>

            <p className="text-lg font-light">
              We have a Safety Management System in place with a 'Zero
              Accident'Philosophy which engages all employees and subcontractors
              to actively improve HSE Performance on our projects. In addition,
              we are fully committed to providing all employees with the
              adequate training to supplement their skill set and ensure that
              they are capable of completing all their tasks efficiently and
              safely. We actively train all levels of managers and employees and
              frequently recommend new training programs for them to supplement
              their skills.
            </p>
          </div>
        </section>

        <section
          className="container space-y-3 py-12"
          aria-labelledby="social-responsibility-heading"
        >
          <Heading id="social-responsibility-heading">
            Social Responsibility
          </Heading>
          <p className="text-lg font-light">
            At Allied Gulf Construction Services W.L.L , we are committed to our
            vision to act responsibly in how we do business and to give back to
            our community. Throughout our business years in the Middle East, we
            have sponsored and encouraged a wide range of businesses such as
            local charities and events, Middle Eastern Councils, Universities,
            Schools, and individual men and women.
          </p>
          <p className="text-lg font-light">
            In our efforts to become more environmentally friendly, we have
            established a Sustainable Management Act throughout the company
            whereby we train all of our staff to reduce, re-use and segregate
            their waste. All of the paper waste from our main office and company
            locations is sent for recycling, and all of the hazardous waste from
            our sites is segregated and staged before disposal. Shortly, we will
            be recycling other types of waste and implementing new methods of
            saving energy and water.
          </p>

          <p className="text-lg font-light">
            Being sustainable is more important than it’s ever been, and to have
            a sustainable business is to have a resilient business. We are
            committed in preventing environmental and social harm, as well as
            replenishing our natural systems & renewable resources and having a
            positive impact on the communities and environments in which we
            operate.
          </p>

          <p className="text-lg font-light">
            We believe that the utilization of green technologies would be a
            crucial factor towards ensuring the sustainable development and
            progress of the construction industry. We implement environmentally
            conscious decisions at each level of the supply chain to meet the
            demand, while promoting a greater interest in sustainable solutions,
            clean energies and recycling resources. We have identified the use
            of renewable energy, environmentally sustainable materials and the
            sustainable management of waste as one of the top priorities.
          </p>

          <p className="text-lg font-light">
            With our operational activities spread across the Middle East, we
            recognize the great opportunity for us to give back more to a wider
            cross-section of the society, and we thoroughly enjoy making a
            difference, by winning many accolades.
          </p>

          <p className="text-lg font-light">
            We reflect the four principles – Economic, Environment, Social and
            Cultural – the highest sustainability standards that includes :
          </p>

          <ul>
            <li>
              Reduction in Carbon Emissions, Energy and Water consumption.
            </li>
            <li>Improved Construction and Operational Waste Management.</li>
            <li>Energy from Renewable sources.</li>
          </ul>

          <p className="text-lg font-light">
            Our commitment and determination is driven by our exceptional team
            who constantly endeavors to go for the best and to find better ways
            of working in a sustainable manner. We believe that the need to
            transform the way we build, operate and repurpose the built
            environment.
          </p>
        </section>
        <section
          className="container py-12"
          aria-labelledby="commitment-heading"
        >
          <Heading level={3} id="commitment-heading">
            Our Commitment
          </Heading>

          <ul className="grid grid-cols-3 gap-4">
            <li className="">
              <h4>We Believe</h4>
              <p className="text-lg font-light">
                The key element behind our success is a continuous commitment to
                fulfill the client's needs.
              </p>
            </li>
            <li className="">
              <h4>REMAIN COMMITTED</h4>
              <p className="text-lg font-light">
                To our designs and construction quality while respecting time
                and budgetary constraints enables us to provide high quality
                design and construction services to our clients.
              </p>
            </li>
            <li className="">
              <h4>Our Commitment</h4>
              <p className="text-lg font-light">
                To excellence in client service is confirmed by this high
                percentage of repeat business.
              </p>
            </li>
          </ul>
        </section>

        <section
          className="container space-y-4 py-12"
          aria-labelledby="project-management-heading"
        >
          <Heading id="project-management-heading">Project Management</Heading>
          <p className="text-lg font-light">
            Our commitment to quality and service is unrivaled. Our project
            managers are reliable, with quick response time, and open
            transparent dialogue. We work with you each step of the way to
            provide guidance and help smooth any issues that may arise.
          </p>
          <ul>
            <li>
              <h4 className="inline">Preconstruction</h4> - reviews contract and
              safety documentation, organize project plans
            </li>
            <li>
              <h4 className="inline">Procurement</h4> - provides accurate
              submittal and ensures correct products ordered
            </li>
            <li>
              <h4 className="inline">Scheduling</h4> - coordinates with
              operations and field technicians to confirm the project stays on
              the contractor's timeline
            </li>
            <li>
              <h4 className="inline">Problem-solving</h4> - handles any issues
              with schedules, lead times, and field conditions Architectural
              Products Representation & Consulting
            </li>
          </ul>
          <p className="text-lg font-light">
            Our team is proficient and trained in architectural specialties
            products for the construction industry. We provide product
            demonstrations, preconstruction estimates, ordering, installations,
            quality control inspections, and more.
          </p>
        </section>

        <section
          className="container py-12"
          aria-labelledby="budgeting-heading"
        >
          <Heading id="budgeting-heading">Budgeting & Cost Analysis</Heading>
          <p className="text-lg font-light">
            We assist with cost planning, ensuring that your project stays on
            target. Our estimators and project managers collaborate and compare
            project details, working with the contractor to ensure all project
            aspects are understood from the start. Value engineering is also
            offered to help determine which alternate products are most
            cost-effective and work best for the architectural design.
          </p>
        </section>

        <section
          className="container py-12"
          aria-labelledby="estimating-heading"
        >
          <Heading id="estimating-heading">Project Estimating</Heading>
          <p className="text-lg font-light">
            An accurate estimate is our goal. Our estimators review each plan's
            requirements, analyze construction details, and manages the quantity
            take-offs to find the labor and materials costs for each project. We
            then use our industry knowledge to guide you through potential
            options, whether it's the most effective materials or finding ways
            to modify your plan to reduce project costs. We stay in open
            communication with our clients on any clarifications, strategies, or
            revisions.
          </p>
        </section>
      </article>

      <Cta />
    </div>
  );
}
