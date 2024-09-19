import type { LOGOS } from "./const";

export type ProjectType = {
    title: string;
    tags: string[];
    description: string;
    image: string;
    link: string;
    slug: string;
    techs: LogoName[];
};

export type LogoName = (typeof LOGOS)[number]['name'];