import React, { FC, Dispatch } from 'react';
import { TBoards, TASKTAG, task } from '../../constant';
import TaskList from './components/TaskList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import './TaskListBlock.scss';

interface TaskListBlockProps {
	boards: TBoards[];
	setBoards: Dispatch<React.SetStateAction<TBoards[]>>;
	currentBoard: TBoards;
}

const TaskListBlock: FC<TaskListBlockProps> = ({
	boards,
	setBoards,
	currentBoard,
}) => {
	const handleDragEnd = (res: DropResult) => {
		console.log(res);
		if (!res.destination) return;
		const { source, destination } = res;
		const taskCopy =
			currentBoard[source.droppableId as TASKTAG]?.[source.index];
		//drapped from source
		setBoards(prev =>
			prev.map(board => {
				if (board.id === currentBoard.id) {
					const taskList = board[source.droppableId as TASKTAG] as task[];
					taskList.splice(source.index, 1);
					return { ...board, [source.droppableId]: taskList };
				} else return board;
			})
		);
		// drop to destination
		setBoards(prev =>
			prev.map(board => {
				if (board.id === currentBoard.id) {
					const taskList = board[destination.droppableId as TASKTAG] as task[];
					taskList.splice(destination.index, 0, taskCopy as task);
					return { ...board, [destination.droppableId]: taskList };
				} else return board;
			})
		);
	};
	return (
		<DragDropContext onDragEnd={res => handleDragEnd(res)}>
			<div className='task-list-container-block'>
				<TaskList
					title={TASKTAG.TODO}
					boards={boards}
					setBoards={setBoards}
					currentBoard={currentBoard}
				/>
				<TaskList
					title={TASKTAG.ING}
					boards={boards}
					setBoards={setBoards}
					currentBoard={currentBoard}
				/>
				<TaskList
					title={TASKTAG.ED}
					boards={boards}
					setBoards={setBoards}
					currentBoard={currentBoard}
				/>
			</div>
		</DragDropContext>
	);
};

export default TaskListBlock;
