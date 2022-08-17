export enum TASKTAG {
	TODO = 'to do',
	ING = 'ing',
	ED = 'ed',
}

type task = {
	title: string;
	content: string;
	id: string;
};

export type TBoards = {
	id: string;
	title: string;
	[TASKTAG.TODO]?: task[];
	[TASKTAG.ING]?: task[];
	[TASKTAG.ED]?: task[];
};
