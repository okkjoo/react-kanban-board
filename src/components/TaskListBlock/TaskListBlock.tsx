import React, { FC, Dispatch } from 'react';
import { TBoards, TASKTAG } from '../../constant';
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
		<div className='task-list-container-block'>
			<TaskList
				title={TASKTAG.TODO}
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
			<TaskList
				title={TASKTAG.ING}
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
			<TaskList
				title={TASKTAG.ED}
				boards={boards}
				setBoards={setBoards}
				currentBoard={currentBoard}
			/>
		</div>
	);
};

export default TaskListBlock;
