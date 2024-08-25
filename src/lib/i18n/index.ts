import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('fr', () => import('./locales/fr.json'));

let localeFromNavigator = getLocaleFromNavigator();

let userLocale = defaultLocale;


if (!['fr', 'en'].includes(userLocale)) {
	userLocale = defaultLocale;
} else if (localeFromNavigator) {
	userLocale = localeFromNavigator.substring(0, 2);
	if (!['fr', 'en'].includes(userLocale)) {
		userLocale = defaultLocale;
	}
}

init({
	fallbackLocale: defaultLocale,
	initialLocale: userLocale
});
