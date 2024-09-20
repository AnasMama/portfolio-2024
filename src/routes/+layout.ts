import type { ProjectType } from '$lib/interface';
import { browser } from '$app/environment';
import { locale, waitLocale } from 'svelte-i18n';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase';
import '$lib/i18n';

export const load = async () => {
	if (browser) {
		locale.set(window.navigator.language);
	}
	await waitLocale();

	const projects: ProjectType[] = [];

	const querySnapshot = await getDocs(collection(db, 'projects'));

	querySnapshot.forEach((doc) => {
		const data = { id: doc.id, ...doc.data() };
		projects.push(data as unknown as ProjectType);
	});
	projects.sort((a, b) => a.sort - b.sort);
	return {
		projects: projects
	};
};
