import React, { FC } from 'react';
import { AddButton } from '../../index';

interface TaskListProp {
	title: string;
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
