const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "savecost-intertrade";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  agentRules: false,
};

export default nextConfig;
