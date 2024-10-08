export function serializeSchema(thing: { [key: string]: any }) {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export const projectSchema = (
	name: string,
	description: string,
	tags: string[],
	technologies: string[],
	images: string[],
	url: string
) => ({
	'@context': 'https://schema.org',
	'@type': 'CreativeWork',
	'name': name,
	'description': description,
	'keywords': tags.concat(technologies).join(', '),
	'image': images,
	'url': url,
	'author': {
		'@type': 'Person',
		'name': 'Anas MAMA'
	}
});

export const personSchema = (
	name: string,
	jobTitle: string,
	description: string,
	sameAs: string[],
	worksFor: string,
	url: string
) => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	'name': name,
	'jobTitle': jobTitle,
	'description': description,
	'url': url,
	'sameAs': sameAs,
	'worksFor': {
		'@type': 'Organization',
		'name': worksFor
	}
});

