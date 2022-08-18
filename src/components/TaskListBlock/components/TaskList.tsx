import React, { FC, Dispatch } from 'react';
import { nanoid } from 'nanoid';
import { AddButton } from '../../';
import { TBoards, TASKTAG } from '../../../constant';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

interface TaskListProp {
	title: TASKTAG;
	boards: TBoards[];
	setBoards: Dispatch<React.SetStateAction<TBoards[]>>;
	currentBoardId: string;
}
const TaskList: FC<TaskListProp> = ({
	title,
	boards,
	currentBoardId,
	setBoards,
}) => {
	// const tid = nanoid()();
	// console.log(currentBoard);

	const handleAddTaskBtn = () => {
		const taskTitle = prompt('Enter your task title');
		const content = prompt('Enter your task content');
		if (!(taskTitle && content)) {
			alert('The content cannot be empty');
			return;
		}
		setBoards(prev => {
			const arr = [...prev];
			const index = prev.findIndex(board => board.id === currentBoardId);
			const boardCopy = arr[index];
			arr.splice(index, 1, {
				// title: currentBoard.title,
				...boardCopy,
				[title]: [
					...boardCopy[title],
					{
						title: taskTitle,
						content: content,
						id: nanoid(),
						// id: tid,
						// tag: title,
					},
				],
			});
			return arr;
		});
		console.log(
			'cur',
			boards.find(item => item.id === currentBoardId)
		);
		console.log('all', boards);
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
								.find(board => board.id === currentBoardId)
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
