import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'impact-theme-home.myshopify.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '/**',
            },
        ],
    },
};

export default withNextIntl(nextConfig);

