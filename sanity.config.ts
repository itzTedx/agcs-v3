"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

import { Logo } from "@/assets/logo";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Allied Gulf Construction Services W.L.L",
  icon: Logo,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: isDev
    ? [
        structureTool({ structure }),
        media(),
        visionTool({ defaultApiVersion: apiVersion }),
      ]
    : [structureTool({ structure }), media()],
});
