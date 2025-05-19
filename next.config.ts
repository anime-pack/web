
import type {NextConfig} from 'next';

// IMPORTANT: Replace 'anime-pack-landing-page' with your actual GitHub repository name
const repositoryName = 'anime-pack-landing-page';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath is needed if your site is hosted in a subdirectory, e.g., username.github.io/repo-name
  // It should be '/<repo-name>'
  basePath: process.env.NODE_ENV === 'production' ? `/${repositoryName}` : '',
  // assetPrefix is also needed for correct asset loading (CSS, JS, images) from the subdirectory
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
  images: {
    unoptimized: true, // Disable image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
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
