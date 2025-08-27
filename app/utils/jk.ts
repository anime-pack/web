import {
    AnimeClient,
    GenresClient,
    SeasonsClient,
    TopClient,
} from '@tutkli/jikan-ts';
import { RateLimiter } from './rateLimiter';

const rateLimiter = RateLimiter.getInstance();

function withRateLimit<T extends object>(client: T): T {
    return new Proxy(client, {
        get(target: any, prop: string) {
            if (typeof target[prop] === 'function') {
                return (...args: any[]) => {
                    return rateLimiter.enqueue(() => target[prop](...args));
                };
            }
            return target[prop];
        },
    });
}

export default {
    anime: withRateLimit(new AnimeClient()),
    seasons: withRateLimit(new SeasonsClient()),
    genres: withRateLimit(new GenresClient()),
    top: withRateLimit(new TopClient()),
};
