import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string(),
      cover: image(),
      coverAlt: z.string().optional(),

      // 👇 agregá esto
      featured: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { news };
