import React, { useState } from 'react';
import { BoardsListBar, TaskListBlock } from './components';
import { TBoards, TASKTAG } from './constant';
import './App.css';

function App() {
	const [boards, setBoards] = useState<TBoards[]>([
		{
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			tasks: [],
		},
		{
			title: '测试11',
			tasks: [
				{ title: '测试todo', content: 'aa', tag: TASKTAG.TODO },
				{
					title: '测试ing',
					content: 'inggggggggggggggggggg',
					tag: TASKTAG.ING,
				},
				{ title: '测试ed', content: 'edededdedededed', tag: TASKTAG.ED },
			],
		},
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
		{ title: '测试测试', tasks: [] },
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
				setcurrentBoard={setcurrentBoard}
			/>
		</div>
	);
}

export default App;
