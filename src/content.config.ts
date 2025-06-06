import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    category: z.string(),
    categorySlug: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
