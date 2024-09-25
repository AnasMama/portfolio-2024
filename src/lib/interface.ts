import type { LOGOS, TAGS } from './const';

export type ProjectType = {
    sort: number;
    status: 'published' | 'draft';
	title: string;
	tags: TagName[];
	slug: string;
	link: string | null;
	company?: 'Onicorn' | 'Freelance';
	description: {
		lang: string;
		content: string;
	}[];
	technologies: LogoName[];
	img_desktop: string | null;
	img_mobile: string | null;
	img_logo: string | null;
};

export type LogoName = (typeof LOGOS)[number]['name'];
export type TagName = (typeof TAGS)[number];
