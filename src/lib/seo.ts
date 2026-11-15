import type { Metadata } from "next";

const SITE_URL = (process.env.SITE_URL || "https://v1vekreddy.github.io").replace(
  /\/+$/,
  ""
);

type ContentMetadata = {
  title: string;
  description: string;
  image?: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
};

function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function generateContentMetadata({
  title,
  description,
  image,
  path,
  type = "website",
  publishedTime,
  tags,
}: ContentMetadata): Metadata {
  const imageUrl = absoluteUrl(image && !image.startsWith("/meta/") ? image : "/assets/social-preview.png");
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type,
      url: canonicalUrl,
      siteName: "Vivek Reddy",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && tags ? { tags } : {}),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
