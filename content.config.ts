import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                id: z.string(),
                author: z.string(),
                title: z.string(),
                description: z.string(),
                date: z.string().transform((str) => new Date(str)),
                ogDate: z.string().transform((str) => new Date(str)),
            }),
        }),
    },
});
