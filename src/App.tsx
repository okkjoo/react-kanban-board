import React, { useState } from 'react';
import { BoardsListBar, TaskListBlock } from './components';
import { TBoards, TASKTAG } from './constant';
import { nanoid } from 'nanoid';

import './App.css';

function App() {
	const [boards, setBoards] = useState<TBoards[]>([
		{
			id: nanoid(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [{ title: '测试todo', content: 'aa', id: nanoid() }],
			[TASKTAG.ING]: [
				{
					title: '测试ing',
					content: 'inggggggggggggggggggg',
					id: nanoid(),
				},
			],
			[TASKTAG.ED]: [
				{
					title: '测试ed',
					content: 'edededdedededed',
					id: nanoid(),
				},
			],
		},
		{
			id: nanoid(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: nanoid(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: nanoid(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: nanoid(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: nanoid(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: nanoid(),
			title: 'aaa',
			[TASKTAG.TODO]: [
				{ title: '测试todo', content: 'aa', id: nanoid() },
				{ title: '测试todo', content: 'aa', id: nanoid() },
				{ title: '测试todo', content: 'aa', id: nanoid() },
			],
			[TASKTAG.ING]: [
				{
					title: '测试ing',
					content: 'inggggggggggggggggggg',
					id: nanoid(),
				},
			],
			[TASKTAG.ED]: [
				{
					title: '测试ed',
					content: 'edededdedededed',
					id: nanoid(),
				},
			],
		},
	]);
	const [currentBoard, setcurrentBoard] = useState(boards[0]);
	return (
		<div className='App'>
			<BoardsListBar
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
				setcurrentBoard={setcurrentBoard}
			/>
			<TaskListBlock
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
		</div>
	);
}

export default App;
