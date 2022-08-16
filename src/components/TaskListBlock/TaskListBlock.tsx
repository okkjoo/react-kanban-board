import React, { FC } from 'react';
import { TBoards } from '../';
import TaskList from './components/TaskList';

import './TaskListBlock.scss';

interface TaskListBlockProps {
	currentBoard: TBoards;
}

const TaskListBlock: FC<TaskListBlockProps> = ({ currentBoard }) => {
	return (
		<div className='task-list-block'>
			<TaskList title='to do' />
			<TaskList title='ing' />
			<TaskList title='ed' />
		</div>
	);
};

export default TaskListBlock;
