export type Work = {
	id: string;
	type: "job" | "project";
	jobInfo?: {
		company: string;
		role: string;
		employmentType: string;
		timeSpan: string;
	};
	title: string;
	description: string;
	tags: string[];
	src: string;
	fallback: string;
	redirect: string;
	placeholder: string;
	live?: string;
	code?: string;
};
