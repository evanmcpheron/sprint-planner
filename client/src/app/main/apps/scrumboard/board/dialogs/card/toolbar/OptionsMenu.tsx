import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent } from 'react';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import ToolbarMenu from './ToolbarMenu';

type OptionsMenuProps = {
	onRemoveCard: () => void;
};

/**
 * The options menu component.
 */
function OptionsMenu(props: OptionsMenuProps) {
	const { onRemoveCard } = props;

	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

	function handleMenuOpen(event: MouseEvent<HTMLButtonElement>) {
		setAnchorEl(event.currentTarget);
	}

	function handleMenuClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<IconButton
				onClick={handleMenuOpen}
				size="large"
			>
				<OlorinSvgIcon>heroicons-outline:dots-horizontal</OlorinSvgIcon>
			</IconButton>
			<ToolbarMenu
				state={anchorEl}
				onClose={handleMenuClose}
			>
				<MenuItem onClick={onRemoveCard}>Remove Card</MenuItem>
			</ToolbarMenu>
		</div>
	);
}

export default OptionsMenu;
