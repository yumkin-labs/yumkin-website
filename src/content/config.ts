import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).optional(), // Define a list of strings
    heroImage: z.string().optional(),
  }),
});

const faq = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
const quotes = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    author: z.string(),
    role: z.string(),
  }),
});

export const collections = { blog, faq, quotes };
