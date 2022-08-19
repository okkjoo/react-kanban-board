import React, { FC, Dispatch, useEffect } from 'react';
import { TBoards, TASKTAG } from '../../constant';
import TaskList from './components/TaskList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import './TaskListBlock.scss';
import { nanoid } from 'nanoid';

interface TaskListBlockProps {
	boards: TBoards[];
	setBoards: Dispatch<React.SetStateAction<TBoards[]>>;
	currentBoardId: string;
}

const TaskListBlock: FC<TaskListBlockProps> = ({
	boards,
	setBoards,
	currentBoardId,
}) => {
	const handleDragEnd = (res: DropResult) => {
		if (!res.destination) return;
		const { source, destination } = res;
		const curBoard = boards.find(
			board => board.id === currentBoardId
		) as TBoards;
		const taskCopy = curBoard[source.droppableId as TASKTAG][source.index];

		setBoards(preBoards =>
			preBoards.map(board => {
				if (board.id === currentBoardId) {
					let boardCopy = { ...board };
					// removed from source
					const taskListSource = board[source.droppableId as TASKTAG];
					taskListSource.splice(source.index, 1);
					boardCopy = { ...board, [source.droppableId]: taskListSource };

					// add to destination
					const taskListDes = board[destination.droppableId as TASKTAG];
					taskListDes.splice(destination.index, 0, taskCopy);
					boardCopy = {
						...board,
						[destination.droppableId as TASKTAG]: taskListDes,
					};
					return boardCopy;
				} else return board;
			})
		);
	};

	const addTask = (title: TASKTAG) => {
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

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key.toLowerCase()) {
			case 'e':
				addTask(TASKTAG.TODO);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, []);

	return (
		<DragDropContext onDragEnd={res => handleDragEnd(res)}>
			<div className='task-list-container-block'>
				<TaskList
					title={TASKTAG.TODO}
					boards={boards}
					setBoards={setBoards}
					currentBoardId={currentBoardId}
					addTask={addTask}
				/>
				<TaskList
					title={TASKTAG.ING}
					boards={boards}
					setBoards={setBoards}
					currentBoardId={currentBoardId}
					addTask={addTask}
				/>
				<TaskList
					title={TASKTAG.ED}
					boards={boards}
					setBoards={setBoards}
					currentBoardId={currentBoardId}
					addTask={addTask}
				/>
			</div>
		</DragDropContext>
	);
};

export default TaskListBlock;
