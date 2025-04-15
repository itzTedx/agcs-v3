import {
  IconCertificate,
  IconLibraryPhoto,
  IconPackage,
  IconPhone,
  IconSparkles,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Home, Wrench } from "lucide-react";

export const NAVLINKS = [
  {
    title: "Home",
    href: "/",
    Icon: Home,
  },
  {
    title: "Company",
    href: "#",
    submenus: [
      {
        subtitle: "Learn more",
        title: "About Us",
        href: "/company/about",
        Icon: IconUsersGroup,
      },
      {
        subtitle: "Explore our projects and achievements",
        title: "Gallery",
        href: "/company/gallery",
        Icon: IconLibraryPhoto,
      },
      {
        subtitle: "Discover our",
        title: "Certifications",
        href: "/company/certifications",
        Icon: IconCertificate,
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    Icon: Wrench,
  },
  {
    title: "Products",
    href: "/products",
    Icon: IconPackage,
  },
  {
    title: "Projects",
    href: "/projects",
    Icon: IconSparkles,
  },

  {
    title: "Contact",
    href: "/contact",
    Icon: IconPhone,
  },
];
