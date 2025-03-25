import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/allied-gulf-construction-services",
    Icon: IconBrandLinkedin,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/alliedgulfconstruction",
    Icon: IconBrandFacebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/allied_gulf",
    Icon: IconBrandX,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alliedgulfconstruction",
    Icon: IconBrandInstagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@allied-gulf",
    Icon: IconBrandYoutube,
  },
] as const;
