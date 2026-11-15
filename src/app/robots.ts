export const dynamic = "force-static";
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://v1vekreddy.github.io/sitemap.xml",
  };
}
