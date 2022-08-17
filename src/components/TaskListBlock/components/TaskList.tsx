import React, { FC, Dispatch } from 'react';
import { AddButton } from '../../';
import { TBoards, TASKTAG } from '../../../constant';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

interface TaskListProp {
	title: TASKTAG;
	boards: TBoards[];
	setBoards: Dispatch<React.SetStateAction<TBoards[]>>;
	currentBoard: TBoards;
}
const TaskList: FC<TaskListProp> = ({
	title,
	boards,
	currentBoard,
	setBoards,
}) => {
	// const tid = useId();
	console.log(currentBoard);

	const handleAddTaskBtn = () => {
		const taskTitle = prompt('Enter your task title');
		const content = prompt('Enter your task content');
		if (!(taskTitle && content)) {
			alert('The content cannot be empty');
		}
		setBoards(prev => {
			const arr = [...prev];
			const index = prev.findIndex(board => board.title === currentBoard.title);
			const boardCopy = arr[index];
			arr.splice(index, 1, {
				// title: currentBoard.title,
				...boardCopy,
				[title]: [
					...boardCopy[title],
					{
						title: taskTitle as string,
						content: content as string,
						id: Math.random().toString(),
						// id: tid,
						// tag: title,
					},
				],
			});
			return arr;
		});
	};

	return (
		<div className='task-list-container'>
			<h2 className='title'>{title}</h2>
			<AddButton handleClick={handleAddTaskBtn} />
			<Droppable droppableId={title}>
				{(provided, snapshot) => {
					return (
						<div
							className='task-list'
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{boards
								.find(board => board.title === currentBoard.title)
								?.[title].map((task, index) => {
									return (
										<Draggable
											key={task.id}
											draggableId={task.id}
											index={index}
										>
											{(provided, snapshot) => {
												return (
													<Task
														title={task.title}
														content={task.content}
														provided={provided}
														snapshot={snapshot}
													/>
												);
											}}
										</Draggable>
									);
								})}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

export default TaskList;
