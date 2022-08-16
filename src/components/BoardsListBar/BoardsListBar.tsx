import React, { Dispatch, FC, SetStateAction } from 'react';
import { AddButton } from '..';
import './BoardsListBar.scss';

export type TBoards = {
	title: string;
};
interface BoardsListBarProps {
	boards: TBoards[];
	setBoards: Dispatch<SetStateAction<TBoards[]>>;
}
const BoardsListBar: FC<BoardsListBarProps> = ({ boards, setBoards }) => {
	const handleAddButton = () => {
		const title = prompt('Enter your title');
		if (title) setBoards(prev => [...prev, { title: title }]);
	};
	return (
		<div className='boards-lists-bar'>
			<h1 className='title'>react-kanban-board</h1>
			<div className='boards-lists'>
				{boards.map(item => (
					<div key={item.title} className='board'>
						{item.title}
					</div>
				))}
				<AddButton handleClick={handleAddButton} />
			</div>
		</div>
	);
};

export default BoardsListBar;
