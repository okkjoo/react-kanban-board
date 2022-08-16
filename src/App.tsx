import React, { useState } from 'react';
import { BoardsListBar, TaskListBlock, TBoards } from './components';
import './App.css';

function App() {
	const [boardsData, setBoardsData] = useState<TBoards[]>([
		{
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			tasks: [],
		},
		{ title: '测试测试', tasks: [{ title: '测试', content: 'aa' }] },
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
