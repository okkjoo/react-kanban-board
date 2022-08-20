import React, { FC, Dispatch, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TBoards, TASKTAG } from '../../constant';
import TaskList from './components/TaskList';
import { cloneDeep } from '../../utils';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import './TaskListBlock.scss';

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
		const { destination, source, draggableId } = res;
		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const curBoard = boards.find(
			board => board.id === currentBoardId
		) as TBoards;
		const taskCopy = curBoard[source.droppableId as TASKTAG][source.index];

		setBoards(preBoards =>
			preBoards.map(board => {
				if (board.id === currentBoardId) {
					let boardCopy = cloneDeep(board);
					// removed from source
					const taskListSource = boardCopy[source.droppableId as TASKTAG];
					taskListSource.splice(source.index, 1);
					boardCopy = { ...boardCopy, [source.droppableId]: taskListSource };

					// add to destination
					const taskListDes = boardCopy[destination.droppableId as TASKTAG];
					taskListDes.splice(destination.index, 0, taskCopy);
					boardCopy = {
						...boardCopy,
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

		if (!(taskTitle || content)) {
			alert("They can't all be empty");
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
	}, [currentBoardId]);

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
