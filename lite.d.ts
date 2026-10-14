declare namespace clsx {
	// `clsx/lite` only concatenates strings: every other value is discarded at
	// runtime. The falsey members are kept so the `cond && 'class'` idiom still
	// type-checks (`false`, `0`, `null` and `undefined` guards).
	type ClassValue = string | false | null | undefined | 0;
	function clsx(...inputs: ClassValue[]): string;
}

declare function clsx(...inputs: clsx.ClassValue[]): string;

export = clsx;
