/// <reference path="../.astro/types.d.ts" />

interface BlogPost {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date;
    heroImage?: string;
  };
}

interface SliderContentItem {
  id: string;
  label: string;
  description: string;
  content: string;
}

interface HeroProps {
  heroSize: "none" | "small" | "large";
  heroImage: string;
  title: string;
  description: string;
}
