import React, { Dispatch, FC, SetStateAction, MouseEvent } from 'react';
import { AddButton } from '..';
import './BoardsListBar.scss';

export type TBoards = {
	title: string;
	tasks?: {};
};

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
		if (title) setBoards(prev => [...prev, { title: title, tasks: {} }]);
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
				{boards.map(item => (
					<div className='board-container' key={item.title}>
						<div
							className={`board ${
								currentBoard.title === item.title ? 'selected' : ''
							}`}
							onClick={() => {
								setcurrentBoard(item);
							}}
						>
							{item.title}
						</div>
						<button
							className='deleteBtn'
							onClick={e => handleDeleteButton(item)}
						>
							remove
						</button>
					</div>
				))}
				<AddButton handleClick={handleAddButton} />
			</div>
		</div>
	);
};

export default BoardsListBar;
