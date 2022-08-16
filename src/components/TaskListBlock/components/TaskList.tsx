import React, { FC, Dispatch } from 'react';
import { AddButton } from '../../';
import { TBoards, TASKTAG } from '../../../constant';

interface TaskListProp {
	title: TASKTAG;
	boards: TBoards[];
	setBoards: Dispatch<React.SetStateAction<TBoards[]>>;
	currentBoard: TBoards;
}
const TaskList: FC<TaskListProp> = ({ title }) => {
	const handleAddTastBtn = () => {};
	return (
		<div className='task-list'>
			<h2 className='title'>{title}</h2>
			<AddButton handleClick={handleAddTastBtn} />
		</div>
	);
};

export default TaskList;
