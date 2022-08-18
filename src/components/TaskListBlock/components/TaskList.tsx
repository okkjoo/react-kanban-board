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
	};

	const handleDeleteTaskButton = (id: string) => {
		// eslint-disable-next-line no-restricted-globals
		const r = confirm('really delete this task?');
		if (!r) return;
		setBoards(prev =>
			prev.map(board => {
				if (board.id === currentBoardId) {
					const taskList = board[title];
					const index = taskList.findIndex(task => task.id === id);
					taskList.splice(index, 1);
					return { ...board, [title]: [...taskList] };
				} else return board;
			})
		);
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
														id={task.id}
														provided={provided}
														snapshot={snapshot}
														handleDeleteTaskButton={handleDeleteTaskButton}
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
