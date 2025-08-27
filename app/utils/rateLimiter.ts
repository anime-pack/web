export class RateLimiter {
    private queue: Array<{
        resolve: Function;
        reject: Function;
        fn: () => Promise<any>;
    }> = [];
    private isProcessing = false;
    private lastRequestTime = 0;
    private readonly delay = 3100; // 3.1 segundos em milissegundos

    private static instance: RateLimiter;

    private constructor() {}

    public static getInstance(): RateLimiter {
        if (!RateLimiter.instance) {
            RateLimiter.instance = new RateLimiter();
        }
        return RateLimiter.instance;
    }

    async enqueue<T>(fn: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push({ resolve, reject, fn });
            this.processQueue();
        });
    }

    private async processQueue() {
        if (this.isProcessing || this.queue.length === 0) return;

        this.isProcessing = true;
        const now = Date.now();
        const timeToWait = Math.max(0, this.lastRequestTime + this.delay - now);

        await new Promise((resolve) => setTimeout(resolve, timeToWait));

        const { resolve, reject, fn } = this.queue.shift()!;

        try {
            const result = await fn();
            this.lastRequestTime = Date.now();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.isProcessing = false;
            this.processQueue();
        }
    }
}
