import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Allied Gulf Construction Services",
    short_name: "AGCS",
    description:
      "Allied Gulf Construction Services, founded in the Kingdom of Bahrain has grown to become one of the leading Civil & Mechanical contracting company handling various prestigious projects and is ranked as a leading General Trading company across Middle East.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a6ea6",
    theme_color: "#1a6ea6",
    scope: "/",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
