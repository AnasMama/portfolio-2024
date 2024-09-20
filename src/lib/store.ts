import { writable } from "svelte/store";
import type { ProjectType } from "./interface";

export const projects = writable<ProjectType[]>([]);