import React, { FC } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface TaskProp {
	title: string;
	content: string;
	provided: DraggableProvided;
	snapshot: DraggableStateSnapshot;
}

const Task: FC<TaskProp> = ({ title, content, provided, snapshot }) => {
	return (
		<div
			className='task'
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			<h3 className='task-title' title={title}>
				{title}
			</h3>
			<p className='content'>{content}</p>
		</div>
	);
};

export default Task;
