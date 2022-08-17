import React, { Dispatch, FC, SetStateAction } from 'react';
import { AddButton } from '..';
import { TBoards, TASKTAG } from '../../constant';
import './BoardsListBar.scss';

interface BoardsListBarProps {
	boards: TBoards[];
	setBoards: Dispatch<SetStateAction<TBoards[]>>;
	currentBoard: TBoards;
	setcurrentBoard: Dispatch<SetStateAction<TBoards>>;
}
const BoardsListBar: FC<BoardsListBarProps> = ({
	boards,
	setBoards,
	currentBoard,
	setcurrentBoard,
}) => {
	const handleAddButton = () => {
		const title = prompt('Enter your title');
		if (title)
			setBoards(prev => [
				...prev,
				{
					id: Math.random().toString(),
					title: title,
					[TASKTAG.TODO]: [],
					[TASKTAG.ING]: [],
					[TASKTAG.ED]: [],
				},
			]);
	};
	const handleDeleteButton = (board: any) => {
		// eslint-disable-next-line no-restricted-globals
		const r = confirm('really remove?');
		if (r === true) {
			setBoards(prev => prev.filter(item => item.title !== board.title));
		}
	};
	return (
		<div className='boards-lists-bar'>
			<h1 className='title'>react-kanban-board</h1>
			<div className='boards-lists'>
				{boards.map((board, idx) => (
					<div className='board-container' key={board.title + idx}>
						<div
							className={`board ${
								currentBoard.id === board.id ? 'selected' : ''
							}`}
							onClick={() => {
								setcurrentBoard(board);
							}}
						>
							{board.title}
						</div>
						<button
							className='deleteBtn'
							onClick={e => handleDeleteButton(board)}
						>
							remove
						</button>
					</div>
				))}
			</div>
			<AddButton handleClick={handleAddButton} />
		</div>
	);
};

export default BoardsListBar;
