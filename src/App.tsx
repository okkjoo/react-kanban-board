import React, { useState } from 'react';
import { BoardsListBar, TaskListBlock, TBoards } from './components';
import './App.css';

function App() {
	const [boards, setBoards] = useState<TBoards[]>([
		{ title: 'one' },
		{ title: 'one' },
		{ title: 'oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
		{ title: '测试测试' },
	]);
	return (
		<div className='App'>
			<BoardsListBar boards={boards} setBoards={setBoards} />
			<TaskListBlock />
		</div>
	);
}

export default App;
