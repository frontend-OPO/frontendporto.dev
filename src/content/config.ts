import { defineCollection, z } from "astro:content";

const event = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      upcoming: z.boolean(),
      title: z.string().min(1),
      description: z.string().min(1),
      link: z.string().min(1),
      date: z.string().min(1),
      location: z.string().min(1),
      address: z.object({
        link: z.string().min(1),
        label: z.string().min(1),
      }),
      speakers: z.array(
        z.object({
          name: z.string().min(1),
          role: z.string().min(1),
          company: z.string(),
          social: z.string().min(1),
        }),
      ),
      host: z.object({
        name: z.string().min(1),
        logo: z.string().min(1),
        link: z.string().min(1),
      }),
      vod: z.string(),
    }),
});

export const collections = {
  event,
};
