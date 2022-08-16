import React, { useState } from 'react';
import { BoardsListBar, TaskListBlock, TBoards } from './components';
import './App.css';

function App() {
	const [boards, setBoards] = useState<TBoards[]>([
		{
			title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
			tasks: {},
		},
		{ title: '测试测试', tasks: {} },
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
			<TaskListBlock />
		</div>
	);
}

export default App;
