import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPagesSite = repositoryName?.toLowerCase().endsWith(".github.io");

const base =
  process.env.GITHUB_ACTIONS === "true"
    ? isUserPagesSite
      ? "/"
      : `/${repositoryName || "personal-portfolio"}/`
    : "/";

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});