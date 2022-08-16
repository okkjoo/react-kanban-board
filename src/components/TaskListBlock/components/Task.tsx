import React, { FC } from 'react';

interface TaskProp {
	title: string;
	content: string;
}

const Task: FC<TaskProp> = ({ title, content }) => {
	return (
		<div className='task'>
			<h3 className='task-title'>{title}</h3>
			<p className='content'>{content}</p>
		</div>
	);
};

export default Task;
