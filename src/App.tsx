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
	]);
	const [currentBoardId, setcurrentBoardId] = useState(boards[0]?.id || 'null');
	return (
		<div className='App'>
			<BoardsListBar
				boards={boards}
				setBoards={setBoards}
				currentBoardId={currentBoardId}
				setcurrentBoardId={setcurrentBoardId}
			/>
			{boards.length && (
				<TaskListBlock
					boards={boards}
					setBoards={setBoards}
					currentBoardId={currentBoardId}
				/>
			)}
		</div>
	);
}

export default App;
