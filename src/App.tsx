import React, { useState, useEffect } from 'react';
import { BoardsListBar, TaskListBlock, STartPage } from './components';
import { TBoards, DATAKEY } from './constant';

import './App.css';

function App() {
	const initialBoards: TBoards[] = localStorage.getItem(DATAKEY)
		? JSON.parse(localStorage.getItem(DATAKEY) as string)
		: [];

	// console.log(initialBoards);
	const initialCurBoardId = sessionStorage.getItem(DATAKEY)
		? sessionStorage.getItem(DATAKEY)
		: undefined;
	console.log(initialCurBoardId);

	const [boards, setBoards] = useState<TBoards[]>(initialBoards);
	const [currentBoardId, setcurrentBoardId] = useState(
		initialCurBoardId || boards[0]?.id || 'null'
	);

	useEffect(() => {
		localStorage.setItem(DATAKEY, JSON.stringify(boards));
		sessionStorage.setItem(DATAKEY, currentBoardId);
	}, [boards, currentBoardId]);

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
