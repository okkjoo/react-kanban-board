import React, { useState, useEffect } from 'react';
import { BoardsListBar, TaskListBlock, StartPage } from './components';
import { TBoards, DATAKEY, MODE } from './constant';

import './App.css';

function App() {
	const initialBoards: TBoards[] = localStorage.getItem(DATAKEY)
		? JSON.parse(localStorage.getItem(DATAKEY) as string)
		: [];

	const initialCurBoardId = sessionStorage.getItem(DATAKEY)
		? sessionStorage.getItem(DATAKEY)
		: undefined;

	const [boards, setBoards] = useState<TBoards[]>(initialBoards);
	const [currentBoardId, setcurrentBoardId] = useState(
		initialCurBoardId || boards[0]?.id || 'null'
	);

	const [mode, setMode] = useState<MODE>(MODE.LIGHT);

	const toggleModeClick = () => {
		setMode(pre => (pre === MODE.LIGHT ? MODE.DARK : MODE.LIGHT));
	};

	useEffect(() => {
		localStorage.setItem(DATAKEY, JSON.stringify(boards));
		sessionStorage.setItem(DATAKEY, currentBoardId);
	}, [boards, currentBoardId]);

	return (
		<div className='App' code-mode={mode}>
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
			)) || <StartPage />}
			<div className='toggle-btn' onClick={toggleModeClick}>
				{mode === MODE.LIGHT ? '🌞' : '🌙'}
			</div>
		</div>
	);
}

export default App;
