import React, { useState, useId } from 'react';
import { BoardsListBar, TaskListBlock } from './components';
import { TBoards, TASKTAG } from './constant';
import './App.css';

function App() {
	const [boards, setBoards] = useState<TBoards[]>([
		{
			id: useId(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [{ title: '测试todo', content: 'aa', id: useId() }],
			[TASKTAG.ING]: [
				{
					title: '测试ing',
					content: 'inggggggggggggggggggg',
					id: useId(),
				},
			],
			[TASKTAG.ED]: [
				{
					title: '测试ed',
					content: 'edededdedededed',
					id: useId(),
				},
			],
		},
		{
			id: useId(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: useId(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: useId(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: useId(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: useId(),
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			[TASKTAG.TODO]: [],
			[TASKTAG.ING]: [],
			[TASKTAG.ED]: [],
		},
		{
			id: useId(),
			title: 'aaa',
			[TASKTAG.TODO]: [
				{ title: '测试todo', content: 'aa', id: useId() },
				{ title: '测试todo', content: 'aa', id: useId() },
				{ title: '测试todo', content: 'aa', id: useId() },
			],
			[TASKTAG.ING]: [
				{
					title: '测试ing',
					content: 'inggggggggggggggggggg',
					id: useId(),
				},
			],
			[TASKTAG.ED]: [
				{
					title: '测试ed',
					content: 'edededdedededed',
					id: useId(),
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
