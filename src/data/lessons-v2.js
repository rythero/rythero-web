import startLessons from './v2-start.json';
import improveLessons from './v2-improve.json';
import toolLessons from './v2-tools.json';

export const lessonsV2 = [...startLessons, ...improveLessons, ...toolLessons];
export const lessonSlugsV2 = lessonsV2.map((lesson) => lesson.slug);
export const lessonBySlugV2 = Object.fromEntries(lessonsV2.map((lesson) => [lesson.slug, lesson]));
