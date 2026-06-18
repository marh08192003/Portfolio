import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(["es", "en"]),
    isFeatured: z.boolean().optional(),
    businessDescription: z.string(),
    tags: z.array(z.string()),
    repositories: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      }),
    ),
  }),
});

export const collections = {
  projects,
};
