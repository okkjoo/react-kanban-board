import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { AddButton } from '..';
import { TBoards, TASKTAG } from '../../constant';
import './BoardsListBar.scss';

interface BoardsListBarProps {
	boards: TBoards[];
	setBoards: Dispatch<SetStateAction<TBoards[]>>;
	currentBoardId: string;
	setcurrentBoardId: Dispatch<React.SetStateAction<string>>;
}
const BoardsListBar: FC<BoardsListBarProps> = ({
	boards,
	setBoards,
	currentBoardId,
	setcurrentBoardId,
}) => {
	const handleAddButton = () => {
		const title = prompt('Enter your title');
		if (title) {
			const newBoardId = nanoid();
			setBoards(prev => [
				...prev,
				{
					id: newBoardId,
					title: title,
					[TASKTAG.TODO]: [],
					[TASKTAG.ING]: [],
					[TASKTAG.ED]: [],
				},
			]);
			setcurrentBoardId(newBoardId);
		}
	};
	const handleDeleteButton = (board: any) => {
		// eslint-disable-next-line no-restricted-globals
		const r = confirm('really remove?');
		if (r === true) {
			setBoards(prev => prev.filter(item => item.id !== board.id));
		}
		board.id === currentBoardId && setcurrentBoardId(boards[0]?.id || 'null');
	};

	const onKeyDown = (e: KeyboardEvent) => {
		console.log(e.key);
		switch (e.key.toLowerCase()) {
			case 'd':
				handleAddButton();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, []);

	return (
		<div className='boards-lists-bar'>
			<h1 className='title'>react-kanban-board</h1>
			<div className='boards-lists'>
				{boards?.map((board, idx) => (
					<div className='board-container' key={board.title + idx}>
						<div
							className={`board ${
								currentBoardId === board.id ? 'selected' : ''
							}`}
							onClick={() => {
								setcurrentBoardId(board.id);
							}}
						>
							{board.title}
						</div>
						<button
							className='deleteBtn'
							onClick={() => handleDeleteButton(board)}
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
