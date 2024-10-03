import { writable } from "svelte/store";
import type { ProjectType } from "./interface";

export const projects = writable<ProjectType[]>([]);
export const message = writable<{
	text: string;
	type: 'success' | 'error' | 'warn';
} | null>(null);
export function showToast(text: string, type: 'success' | 'error' | 'warn') {
	message.set({ text, type });
}