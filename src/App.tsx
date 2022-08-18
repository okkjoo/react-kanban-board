import React, { useState, useEffect } from 'react';
import { BoardsListBar, TaskListBlock, STartPage } from './components';
import { TBoards, DATAKEY } from './constant';

import './App.css';

function App() {
	const initialBoards: TBoards[] = localStorage.getItem(DATAKEY)
		? JSON.parse(localStorage.getItem(DATAKEY) as string)
		: [];

	// console.log(initialBoards);

	const [boards, setBoards] = useState<TBoards[]>(initialBoards);
	const [currentBoardId, setcurrentBoardId] = useState(boards[0]?.id || 'null');

	useEffect(() => {
		localStorage.setItem(DATAKEY, JSON.stringify(boards));
	}, [boards]);

	return (
		<div className='App'>
			<BoardsListBar
				boards={boards}
				setBoards={setBoards}
				currentBoardId={currentBoardId}
				setcurrentBoardId={setcurrentBoardId}
			/>
			{(boards.length && (
				<TaskListBlock
					boards={boards}
					setBoards={setBoards}
					currentBoardId={currentBoardId}
				/>
			)) || <STartPage />}
		</div>
	);
}

export default App;
