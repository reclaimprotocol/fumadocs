import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  routes: {
    path: '/',
  }
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
