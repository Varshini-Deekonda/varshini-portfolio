"use client";

import dynamic from "next/dynamic";

// This tells Next.js to only load your portfolio code directly inside the browser,
// preventing the build server from crashing!
const PortfolioComponent = dynamic(
  () => import("./portfolio").then((mod) => mod.Portfolio),
  { ssr: false }
);

export default function Home() {
  return <PortfolioComponent />;
}
