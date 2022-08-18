import React, { FC } from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface TaskProp {
	title: string;
	content: string;
	id: string;
	provided: DraggableProvided;
	snapshot: DraggableStateSnapshot;
	handleDeleteTaskButton: (id: string) => void;
}

const Task: FC<TaskProp> = ({
	title,
	content,
	id,
	provided,
	handleDeleteTaskButton,
}) => {
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
			<div
				className='delete-task-btn'
				onClick={() => handleDeleteTaskButton(id)}
			>
				❌
			</div>
			<p className='content'>{content}</p>
		</div>
	);
};

export default Task;
