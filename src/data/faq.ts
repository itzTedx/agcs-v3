export type FAQItem = {
    question: string;
    answer: string;
  };
  
  export type FAQSection = {
    section: string;
    items: FAQItem[];
  };

export const FAQS: FAQSection[] = [
    {
      section: "Company Information",
      items: [
        {
          question: "What is Allied Gulf Construction Services W.L.L.?",
          answer: "Allied Gulf Construction Services W.L.L. is a leading provider of high-quality construction materials and building solutions in Bahrain, specializing in products such as expansion joints, movement joints, wall protection systems, skylights, tile trims, and more.",
        },
        {
          question: "Where is Allied Gulf Construction Services W.L.L. located?",
          answer: "Allied Gulf is based in Bahrain and serves clients across the Middle East, offering innovative construction materials for various industries, including commercial, residential, and industrial sectors.",
        },
        {
          question: "What industries does Allied Gulf serve?",
          answer: "The company provides products and solutions for construction, commercial buildings, hospitals, schools, industrial sites, airports, and residential properties.",
        },
        {
          question: "Does Allied Gulf provide custom solutions for construction projects?",
          answer: "Yes, Allied Gulf offers customized construction materials and solutions tailored to meet specific project requirements, ensuring durability, aesthetics, and compliance with industry standards.",
        },
        {
          question: "How can I contact Allied Gulf for product inquiries?",
          answer: "You can reach Allied Gulf through their official website, via email, or by calling their customer service hotline.",
        },
        {
          question: "Does Allied Gulf offer installation services?",
          answer: "While Allied Gulf primarily supplies construction materials, they can guide customers on installation and recommend trusted installation partners if needed.",
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
          question: "What types of expansion joint covers are available?",
          answer: "Expansion joint covers come in different types, including floor, wall, ceiling, and exterior expansion joint covers, designed to protect and enhance the durability of the joints while maintaining aesthetics.",
        },
        {
          question: "What happens if you don't install expansion joints in concrete?",
          answer: "Without expansion joints, concrete can crack and become structurally compromised due to thermal expansion, contraction, and movement stresses.",
        },
      ],
    },
    {
      section: "Wall & Corner Protection",
      items: [
        {
          question: "How do crash rails protect walls in high-traffic areas?",
          answer: "Crash rails are installed on walls to prevent damage from carts, wheelchairs, and other moving objects. They are often used in hospitals, schools, and commercial buildings to protect interior walls.",
        },
        {
          question: "What are wall guards, and why are they important?",
          answer: "Wall guards provide impact protection, reducing maintenance costs and extending the life of walls. They are commonly found in healthcare, education, and hospitality environments.",
        },
        {
          question: "What are the benefits of using corner guards?",
          answer: "Corner guards protect wall corners from chips, dents, and other damage caused by furniture, carts, and foot traffic, maintaining the building’s appearance and structural integrity.",
        },
      ],
    },
    {
      section: "Floor & Stair Safety",
      items: [
        {
          question: "What is stair nosing, and why is it necessary?",
          answer: "Stair nosing is an edge trim installed on stairs to prevent slipping, improve visibility, and extend the lifespan of stair treads by reducing wear and tear.",
        },
        {
          question: "Why are tile trims used in flooring?",
          answer: "Tile trims provide a clean, finished look while protecting tile edges from chipping. They also enhance durability and safety in tiled surfaces.",
        },
      ],
    },
    {
      section: "Acoustic & Lighting Solutions",
      items: [
        {
          question: "How do sound absorption panels improve indoor environments?",
          answer: "Sound absorption panels reduce noise and echo in spaces such as offices, conference rooms, and auditoriums, creating a more comfortable acoustic environment.",
        },
        {
          question: "What are the advantages of installing skylights in buildings?",
          answer: "Skylights allow natural light into buildings, reducing energy costs, improving indoor comfort, and enhancing aesthetics. They can also provide ventilation in some designs.",
        },
      ],
    },
    {
      section: "Specialized Products",
      items: [
        {
          question: "What are silent pods, and where are they used?",
          answer: "Silent pods are soundproof workspaces used in offices, libraries, and open areas to provide private and quiet spaces for meetings, phone calls, or focused work.",
        },
        {
          question: "What are touchless toilet cubicles, and how do they work?",
          answer: "Touchless toilet cubicles use sensor-based systems to allow users to enter, flush, and exit without physical contact, improving hygiene and reducing germ transmission.",
        },
      ],
    },
    
  ];
  