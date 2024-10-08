import { BASE_URL } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const pages = [
		{ path: '', changefreq: 'weekly', priority: 1.0 },
		{ path: 'about', changefreq: 'yearly', priority: 0.5 },
		{ path: 'contact', changefreq: 'yearly', priority: 0.4 },
		{ path: 'projects', changefreq: 'monthly', priority: 0.6 },
		{ path: 'projects#viaprepa', changefreq: 'monthly', priority: 0.8 },
		{ path: 'projects#micromegas', changefreq: 'monthly', priority: 0.8 },
		{ path: 'projects#commiit', changefreq: 'monthly', priority: 0.8 },
		{ path: 'projects#extropian', changefreq: 'monthly', priority: 0.8 },
		{ path: 'projects#valorauto', changefreq: 'monthly', priority: 0.8 }
	];

	const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
					.map(
						({ path, changefreq, priority }) => `
            <url>
              <loc>${BASE_URL}/${path}</loc>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `
					)
					.join('')}
      </urlset>
    `.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
