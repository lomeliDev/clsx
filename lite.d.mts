// `clsx/lite` only concatenates strings: every other value is discarded at
// runtime. The falsey members are kept so the `cond && 'class'` idiom still
// type-checks (`false`, `0`, `null` and `undefined` guards).
export type ClassValue = string | false | null | undefined | 0;

export function clsx(...inputs: ClassValue[]): string;
export default clsx;
