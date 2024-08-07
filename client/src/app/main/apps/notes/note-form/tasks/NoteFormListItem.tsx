import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import { ChangeEvent } from 'react';
import { NoteListItemType } from '../../NotesApi';

type NoteFormListItemProps = {
	onListItemRemove: (id: string) => void;
	onListItemChange: (T: NoteListItemType) => void;
	item: NoteListItemType;
};

/**
 * The note form list item.
 */
function NoteFormListItem(props: NoteFormListItemProps) {
	const { onListItemChange, item, onListItemRemove } = props;

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		onListItemChange(
			_.setIn(
				item,
				event.target.name,
				event.target.type === 'checkbox' ? event.target.checked : event.target.value,
			) as NoteListItemType,
		);
	}

	if (!item) {
		return null;
	}

	return (
		<ListItem
			className="p-0"
			key={item.id}
			dense
		>
			<Checkbox
				className="p-0"
				checked={item.completed}
				tabIndex={-1}
				disableRipple
				name="completed"
				onChange={handleChange}
				color="default"
			/>
			<Input
				className={clsx('flex flex-1 mx-8', item.completed && 'line-through opacity-50')}
				name="content"
				value={item.content}
				onChange={handleChange}
				disableUnderline
			/>
			<IconButton
				className="w-32 h-32 mx-4 p-0"
				aria-label="Delete"
				onClick={() => onListItemRemove(item.id)}
				size="large"
			>
				<OlorinSvgIcon size={20}>heroicons-outline:trash</OlorinSvgIcon>
			</IconButton>
		</ListItem>
	);
}

export default NoteFormListItem;
