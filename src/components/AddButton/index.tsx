import React, { FC } from 'react';
import './AddButton.scss';
interface AddButtonProps {
	handleClick: () => void;
}
const AddButton: FC<AddButtonProps> = ({ handleClick }) => {
	return (
		<button className='add-button' onClick={handleClick}>
			+
		</button>
	);
};

export default AddButton;
