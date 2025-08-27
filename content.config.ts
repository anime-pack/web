import { defineContentConfig, defineCollection, z } from '@nuxt/content';
import { asRobotsCollection } from '@nuxtjs/robots/content';

export default defineContentConfig({
    collections: {
        blog: defineCollection(
            asRobotsCollection({
                type: 'page',
                source: 'blog/*.md',
                schema: z.object({
                    id: z.string(),
                    title: z.string(),
                    description: z.string(),
                    og_image: z.string().optional(),
                    og_image_alt: z.string().optional(),
                    date: z.string(),
                    hour: z.string(),
                    author: z.object({
                        username: z.string(),
                        display_name: z.string(),
                        uuid: z.string(),
                    }),
                    data: z.object({
                        og_date: z.string(),
                        og_hour: z.string(),
                        posted_at: z.number().transform((val) => new Date(val)),
                        updated_at: z.number().transform((val) => new Date(val)).optional(),
                        category: z.enum(['news', 'updates', 'events', 'misc']).default('misc'),
                        tags: z.array(z.string()).optional(),
                    }),
                    robots: z.boolean().default(true),
                }),
            })
        ),
    },
});
