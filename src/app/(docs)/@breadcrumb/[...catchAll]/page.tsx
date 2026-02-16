import { getDocPageSlugs } from "@/app/(docs)/docs/api";
import { loadGuides } from "@/app/(docs)/docs/installation/framework-guides";

export async function generateStaticParams() {
  const params: { catchAll: string[] }[] = [];

  // Пути документации (docs/[slug])
  const docSlugs = await getDocPageSlugs();
  for (const slug of docSlugs) {
    params.push({ catchAll: ["docs", ...slug.split("/")] });
  }

  // Пути framework guides (docs/installation/framework-guides/[...slug])
  const guides = await loadGuides();
  for (const { slug, tabs = [] } of guides) {
    params.push({ catchAll: ["docs", "installation", "framework-guides", slug] });
    for (const tab of tabs) {
      params.push({ catchAll: ["docs", "installation", "framework-guides", slug, tab.slug] });
    }
  }

  // Статические пути installation
  const installationPaths = [
    ["docs", "installation"],
    ["docs", "installation", "using-vite"],
    ["docs", "installation", "using-postcss"],
    ["docs", "installation", "tailwind-cli"],
    ["docs", "installation", "play-cdn"],
    ["docs", "installation", "framework-guides"],
  ];
  for (const segments of installationPaths) {
    params.push({ catchAll: segments });
  }

  // Brand
  params.push({ catchAll: ["docs", "brand"] });

  return params;
}

export default function Page() {
  return null;
}
