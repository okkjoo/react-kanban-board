import React, { Dispatch, FC, SetStateAction } from 'react';
import { AddButton } from '..';
import { TBoards } from '../../constant';
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
		if (title) setBoards(prev => [...prev, { title: title, tasks: [] }]);
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
				{boards.map((item, idx) => (
					<div className='board-container' key={item.title + idx}>
						<div
							className={`board ${currentBoard === item ? 'selected' : ''}`}
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
			</div>
			<AddButton handleClick={handleAddButton} />
		</div>
	);
};

export default BoardsListBar;
