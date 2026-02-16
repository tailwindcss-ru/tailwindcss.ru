#!/usr/bin/env node
/**
 * Сборка статического экспорта для nginx.
 * Временно переименовывает api/og (несовместим со static export), собирает, восстанавливает.
 */
import { rename, access, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const apiOg = join(root, "src", "app", "api", "og");
const apiOgBak = join(root, ".api-og-backup");
const nextDir = join(root, ".next");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (await exists(nextDir)) {
    console.log("Очищаем .next...");
    await rm(nextDir, { recursive: true });
  }
  const hasApiOg = await exists(apiOg);
  if (hasApiOg) {
    console.log("Временно отключаем api/og для static export...");
    await rename(apiOg, apiOgBak);
  }

  try {
    execSync("pnpm exec next build", {
      cwd: root,
      stdio: "inherit",
    });
  } finally {
    if (hasApiOg) {
      console.log("Восстанавливаем api/og...");
      await rename(apiOgBak, apiOg);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
