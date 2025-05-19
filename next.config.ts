
import type {NextConfig} from 'next';

// IMPORTANT: When using a custom domain with GitHub Pages, basePath and assetPrefix are typically not needed.
// The repositoryName is kept here in case you switch back to a non-custom domain deployment.
const repositoryName = 'web-page';

const nextConfig: NextConfig = {
  output: 'export',
  // For custom domains on GitHub Pages, basePath and assetPrefix should usually be empty.
  // If you were deploying to username.github.io/repo-name, these would be `/${repositoryName}`.
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '/', // assetPrefix often still needs to be / for dev
  images: {
    unoptimized: true, // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
