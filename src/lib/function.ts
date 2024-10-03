import { slide, type SlideParams } from 'svelte/transition';

export const view = (name: string) => `view-transition-name: ${name}`;

export default function fadeSlide(node: Element, options: SlideParams | undefined = undefined) {
    const slideTrans = slide(node, options);
    return {
        duration: options?.duration,
        css: (t: number) => `
            ${slideTrans?.css ? slideTrans.css(t, 1) : ''}
            opacity: ${t};
        `
    };
}