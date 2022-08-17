import React, { FC, Dispatch } from 'react';
import { AddButton } from '../../';
import { TBoards, TASKTAG } from '../../../constant';
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
	const handleAddTastBtn = () => {
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
				title: currentBoard.title,
				tasks: [
					...boardCopy.tasks,
					{
						title: taskTitle as string,
						content: content as string,
						id: Math.random().toString(),
						// id: tid,
						tag: title,
					},
				],
			});
			return arr;
		});
	};

	return (
		<div className='task-list-container'>
			<h2 className='title'>{title}</h2>
			<AddButton handleClick={handleAddTastBtn} />
			<div className='task-list'>
				{boards
					.find(board => board.title === currentBoard.title)
					?.tasks.map(task => {
						if (task.tag === title) {
							return (
								<Task
									key={task.title}
									title={task.title}
									content={task.content}
								/>
							);
						} else return null;
					})}
			</div>
		</div>
	);
};

export default TaskList;
