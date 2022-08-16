export enum TASKTAG {
	TODO = 'to do',
	ING = 'ing',
	ED = 'ed',
}

type task = {
	title: string;
	content: string;
	tag?: TASKTAG;
};

export type TBoards = {
	title: string;
	tasks: task[];
};
