import React, { FC, Dispatch } from 'react';
import { TBoards } from '../';
import TaskList from './components/TaskList';

import './TaskListBlock.scss';

interface TaskListBlockProps {
	boards: TBoards[];
	setBoards: Dispatch<React.SetStateAction<TBoards[]>>;
	currentBoard: TBoards;
	setcurrentBoard: Dispatch<React.SetStateAction<TBoards>>;
}

const TaskListBlock: FC<TaskListBlockProps> = ({
	boards,
	setBoards,
	currentBoard,
}) => {
	return (
		<div className='task-list-block'>
			<TaskList
				title='to do'
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
			<TaskList
				title='ing'
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
			<TaskList
				title='ed'
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
		</div>
	);
};

export default TaskListBlock;
