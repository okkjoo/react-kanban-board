import React, { useState } from 'react';
import { BoardsListBar, TaskListBlock, TBoards } from './components';
import './App.css';

function App() {
	const [boardsData, setBoardsData] = useState<TBoards[]>([
		{
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			tasks: [],
		},
		{
			title: '测试11',
			tasks: [
				{ title: '测试todo', content: 'aa', tag: 'to do' },
				{ title: '测试ing', content: 'inggggggggggggggggggg', tag: 'ing' },
				{ title: '测试ed', content: 'edededdedededed', tag: 'ed' },
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
	const [currentBoard, setcurrentBoard] = useState(boardsData[0]);
	return (
		<div className='App'>
			<BoardsListBar
				boards={boardsData}
				setBoards={setBoardsData}
				currentBoard={currentBoard}
				setcurrentBoard={setcurrentBoard}
			/>
			<TaskListBlock currentBoard={currentBoard} />
		</div>
	);
}

export default App;
