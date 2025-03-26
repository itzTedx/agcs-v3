export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  section: string;
  items: FAQItem[];
};

export const HOME_FAQS: FAQSection[] = [
  {
    section: "Company Information",
    items: [
      {
        question: "What is Allied Gulf Construction Services W.L.L.?",
        answer:
          "Allied Gulf Construction Services W.L.L. is a leading provider of high-quality construction materials and building solutions in Bahrain, specializing in products such as expansion joints, movement joints, wall protection systems, skylights, tile trims, and more.",
      },
      {
        question: "Where is Allied Gulf Construction Services W.L.L. located?",
        answer:
          "Allied Gulf is based in Bahrain and serves clients across the Middle East, offering innovative construction materials for various industries, including commercial, residential, and industrial sectors.",
      },
      {
        question: "What industries does Allied Gulf serve?",
        answer:
          "The company provides products and solutions for construction, commercial buildings, hospitals, schools, industrial sites, airports, and residential properties.",
      },
      {
        question:
          "Does Allied Gulf provide custom solutions for construction projects?",
        answer:
          "Yes, Allied Gulf offers customized construction materials and solutions tailored to meet specific project requirements, ensuring durability, aesthetics, and compliance with industry standards.",
      },
      {
        question: "How can I contact Allied Gulf for product inquiries?",
        answer:
          "You can reach Allied Gulf through their official website, via email, or by calling their customer service hotline.",
      },
      {
        question: "Does Allied Gulf offer installation services?",
        answer:
          "While Allied Gulf primarily supplies construction materials, they can guide customers on installation and recommend trusted installation partners if needed.",
      },
    ],
  },
  {
    section: "Expansion & Movement Joints",
    items: [
      {
        question: "Why are expansion joints important in construction?",
        answer:
          "Expansion joints allow buildings to expand and contract due to temperature changes, seismic activity, and structural movement, preventing cracks and structural damage.",
      },
      {
        question: "How do I determine if my building needs expansion joints?",
        answer:
          "Factors such as building size, materials used, environmental conditions, and structural movement considerations determine the need for expansion joints. They are typically required in large structures and high-temperature fluctuation areas.",
      },
      {
        question: "What types of expansion joint covers are available?",
        answer:
          "Expansion joint covers come in different types, including floor, wall, ceiling, and exterior expansion joint covers, designed to protect and enhance the durability of the joints while maintaining aesthetics.",
      },
      {
        question:
          "What happens if you don't install expansion joints in concrete?",
        answer:
          "Without expansion joints, concrete can crack and become structurally compromised due to thermal expansion, contraction, and movement stresses.",
      },
    ],
  },
  {
    section: "Wall & Corner Protection",
    items: [
      {
        question: "How do crash rails protect walls in high-traffic areas?",
        answer:
          "Crash rails are installed on walls to prevent damage from carts, wheelchairs, and other moving objects. They are often used in hospitals, schools, and commercial buildings to protect interior walls.",
      },
      {
        question: "What are wall guards, and why are they important?",
        answer:
          "Wall guards provide impact protection, reducing maintenance costs and extending the life of walls. They are commonly found in healthcare, education, and hospitality environments.",
      },
      {
        question: "What are the benefits of using corner guards?",
        answer:
          "Corner guards protect wall corners from chips, dents, and other damage caused by furniture, carts, and foot traffic, maintaining the building’s appearance and structural integrity.",
      },
    ],
  },
  {
    section: "Floor & Stair Safety",
    items: [
      {
        question: "What is stair nosing, and why is it necessary?",
        answer:
          "Stair nosing is an edge trim installed on stairs to prevent slipping, improve visibility, and extend the lifespan of stair treads by reducing wear and tear.",
      },
      {
        question: "Why are tile trims used in flooring?",
        answer:
          "Tile trims provide a clean, finished look while protecting tile edges from chipping. They also enhance durability and safety in tiled surfaces.",
      },
    ],
  },
  {
    section: "Acoustic & Lighting Solutions",
    items: [
      {
        question: "How do sound absorption panels improve indoor environments?",
        answer:
          "Sound absorption panels reduce noise and echo in spaces such as offices, conference rooms, and auditoriums, creating a more comfortable acoustic environment.",
      },
      {
        question:
          "What are the advantages of installing skylights in buildings?",
        answer:
          "Skylights allow natural light into buildings, reducing energy costs, improving indoor comfort, and enhancing aesthetics. They can also provide ventilation in some designs.",
      },
    ],
  },
  {
    section: "Specialized Products",
    items: [
      {
        question: "What are silent pods, and where are they used?",
        answer:
          "Silent pods are soundproof workspaces used in offices, libraries, and open areas to provide private and quiet spaces for meetings, phone calls, or focused work.",
      },
      {
        question: "What are touchless toilet cubicles, and how do they work?",
        answer:
          "Touchless toilet cubicles use sensor-based systems to allow users to enter, flush, and exit without physical contact, improving hygiene and reducing germ transmission.",
      },
    ],
  },
];


export const FAQS: FAQSection[] = [
  {
    section: "Company Information",
    items: [
      {
        question: "What is Allied Gulf Construction Services W.L.L.?",
        answer: "Allied Gulf Construction Services W.L.L. is a leading provider of high-quality construction services and materials across the Middle East, specializing in civil, mechanical, and infrastructure projects.",
      },
      {
        question: "Where is Allied Gulf Construction Services W.L.L. located?",
        answer: "Allied Gulf is based in the Kingdom of Bahrain, providing construction solutions across the Middle East region.",
      },
      {
        question: "What industries does Allied Gulf serve?",
        answer: "We serve various industries including commercial, residential, oil & gas, infrastructure, and industrial sectors with a focus on sustainable and high-quality construction solutions.",
      },
      {
        question: "Does Allied Gulf offer turnkey construction services?",
        answer: "Yes, we offer end-to-end turnkey solutions, including design, project management, construction execution, and material supply.",
      },
      {
        question: "Does Allied Gulf collaborate with international suppliers?",
        answer: "Yes, we partner with international suppliers to source high-quality construction materials and innovative solutions.",
      },
    ],
  },
  {
    section: "Construction & Project Management",
    items: [
      {
        question: "What types of construction services does Allied Gulf provide?",
        answer: "We specialize in civil and mechanical contracting, interior fit-outs, MEP works, flooring, coatings, insulation, and smart building solutions.",
      },
      {
        question: "What are the key factors to consider in project management?",
        answer: "Key factors include planning, budgeting, risk management, quality assurance, resource allocation, and adherence to safety standards.",
      },
      {
        question: "Does Allied Gulf handle infrastructure projects?",
        answer: "Yes, we handle vital infrastructure projects such as roads, bridges, pipelines, and utility networks across the Middle East.",
      },
      {
        question: "How does Allied Gulf ensure timely project completion?",
        answer: "We use advanced project management tools, experienced teams, and streamlined workflows to ensure on-time and high-quality project delivery.",
      },
      {
        question: "How does Allied Gulf ensure the quality of its construction materials?",
        answer: "We follow strict quality control measures and source materials from reputable manufacturers, ensuring compliance with international standards.",
      },
      {
        question: "What are the latest trends in modern construction?",
        answer: "Modern construction trends include green building, prefabrication, smart construction technologies, and sustainable materials.",
      },
    ],
  },
  {
    section: "Expansion & Movement Joints",
    items: [
      {
        question: "Why are expansion joints important in construction?",
        answer: "Expansion joints allow buildings to expand and contract due to temperature changes, seismic activity, and structural movement, preventing cracks and structural damage.",
      },
      {
        question: "How do I determine if my building needs expansion joints?",
        answer: "Factors such as building size, materials used, environmental conditions, and structural movement considerations determine the need for expansion joints. They are typically required in large structures and high-temperature fluctuation areas.",
      },
      {
        question: "What materials are used for expansion joints?",
        answer: "Common materials include rubber, metal, neoprene, and elastomeric compounds designed to absorb movement and prevent stress cracks.",
      },
      {
        question: "What are the different types of expansion joints?",
        answer: "Types include structural expansion joints, wall expansion joints, floor expansion joints, and seismic expansion joints, each serving specific structural needs.",
      },
    ],
  },
  {
    section: "Wall & Floor Protection Systems",
    items: [
      {
        question: "What are wall guards and why are they used?",
        answer: "Wall guards protect walls from impact damage in high-traffic areas such as hospitals, schools, and commercial buildings, enhancing durability and aesthetics.",
      },
      {
        question: "What are the benefits of stair nosing?",
        answer: "Stair nosing improves safety by enhancing grip, reducing wear and tear on stair edges, and increasing visibility in low-light areas.",
      },
      {
        question: "Are crash rails necessary in buildings?",
        answer: "Yes, crash rails provide essential impact protection in hospitals, airports, and commercial spaces, preventing damage to walls and furniture.",
      },
    ],
  },
  {
    section: "Architectural & Specialty Products",
    items: [
      {
        question: "What are silent pods used for?",
        answer: "Silent pods provide soundproof spaces for offices, meeting rooms, or relaxation areas, improving workplace productivity and privacy.",
      },
      {
        question: "What are touchless toilet cubicles?",
        answer: "Touchless toilet cubicles are designed for hygiene and convenience, offering sensor-based doors and automated flushing systems to reduce germ contact.",
      },
      {
        question: "How do skylights benefit buildings?",
        answer: "Skylights enhance natural lighting, improve energy efficiency, and create visually appealing interior spaces.",
      },
    ],
  },
  {
    section: "Portable Cabins & Modular Solutions",
    items: [
      {
        question: "What types of portable cabins does Allied Gulf offer?",
        answer: "We provide modular cabins for offices, housing, site accommodation, and container conversions customized to client needs.",
      },
      {
        question: "What are the benefits of prefab houses?",
        answer: "Prefab houses offer quick assembly, cost efficiency, and sustainable construction, making them an ideal choice for remote locations and temporary housing.",
      },
      {
        question: "How durable are container conversions?",
        answer: "Container conversions are highly durable, weather-resistant, and adaptable for various uses such as offices, shops, and storage units.",
      },
    ],
  },
  {
    section: "Safety & Compliance",
    items: [
      {
        question: "What safety measures does Allied Gulf follow?",
        answer: "We adhere to strict safety standards, including ISO 9001:2015 compliance, zero-accident policies, and regular employee training programs.",
      },
      {
        question: "Why is HSE (Health, Safety, and Environment) important in construction?",
        answer: "HSE ensures worker safety, prevents environmental harm, and maintains compliance with industry regulations, leading to sustainable and efficient construction practices.",
      },
      {
        question: "Does Allied Gulf provide sustainable construction solutions?",
        answer: "Yes, we focus on eco-friendly building practices, including waste reduction, energy-efficient materials, and green technology implementation.",
      },
    ],
  },
  {
    section: "Installation & Technical Support",
    items: [
      {
        question: "Does Allied Gulf provide installation services?",
        answer: "Yes, we offer professional installation services for all our products, including movement joints, wall protection, and skylights.",
      },
      {
        question: "Can I get technical support for product specifications?",
        answer: "Absolutely! Our team provides detailed product specifications and technical guidance for architects and contractors.",
      },
    ],
  },
  {
    section: "Client Support & Services",
    items: [
      {
        question: "How can I contact Allied Gulf for a project inquiry?",
        answer: "You can contact us via phone at +973-1779 1317 or email at trade@alliedgulf.me for project inquiries and consultations.",
      },
      {
        question: "Does Allied Gulf offer customized construction solutions?",
        answer: "Yes, we offer tailor-made solutions to meet specific project requirements, including design, materials, and construction methodologies.",
      },
      {
        question: "What is the process of working with Allied Gulf?",
        answer: "Our process includes initial consultation, project planning, design approvals, material procurement, construction execution, and final quality checks.",
      },{
        question: "Does Allied Gulf provide maintenance services for installed systems?",
        answer: "Yes, we offer ongoing maintenance services for our products, including expansion joints, wall guards, and portable cabins.",
      },
      {
        question: "How can I request a quotation for my project?",
        answer: "You can request a quotation by visiting our website, calling our customer service, or emailing us with project details.",
      },
    ],
  },
  {
    section: "After-Sales & Warranty Services",
    items: [
      {
        question: "Do Allied Gulf products come with a warranty?",
        answer: "Yes, all our products come with a warranty to ensure quality and long-term performance.",
      },
      {
        question: "What after-sales support does Allied Gulf provide?",
        answer: "We offer ongoing support, maintenance, and replacement services for all our construction materials and architectural products.",
      },
    ],
  },
];
