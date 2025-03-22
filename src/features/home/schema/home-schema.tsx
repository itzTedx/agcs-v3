import { siteConfig } from "@/data/site-config";
import { SOCIAL_LINKS } from "@/data/social-links";

export const HomeSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manama",
      addressRegion: "Capital Governorate",
      addressCountry: "Bahrain",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.join(", "),
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Bahrain",
      },
    },
    image: [`${siteConfig.url}${siteConfig.ogImage}`],
    founder: {
      "@type": "Person",
      name: siteConfig.creator,
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: "50",
      maxValue: "100",
    },
    areaServed: ["Bahrain", "Middle East"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
