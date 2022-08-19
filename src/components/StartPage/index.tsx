import React from 'react';

import './StartPage.scss';

const StartPage = () => {
	return (
		<div className='start-page'>
			<h1 className='title'>Welcome to react-kanban-board✨</h1>
			<div className='circle-list'>
				<div className='circle'>
					<div className='paragraph'>
						<i>💦</i> Add your kanban with a plus sign in the bottom left
					</div>
				</div>
				<div className='circle'>
					<div className='paragraph'>
						<i>⚡</i>shortcut key:
						<br /> - D: add a kanban
						<br />- E: add a 'to do' task
					</div>
				</div>
				<div className='circle'>
					<div className='paragraph'>
						<i>💫</i> Features:
						<br />- use LocalStorage
						<br />- Draggable
						<br />
						<br />
						<i>💥</i> Know more:
						<br />
						<a
							href='https://github.com/okkjoo/react-kanban-board'
							target='_blank'
							rel='noreferrer'
						>
							github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
