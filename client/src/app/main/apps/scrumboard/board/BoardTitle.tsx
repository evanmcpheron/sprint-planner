import { Controller, useForm } from 'react-hook-form';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState, MouseEvent } from 'react';
import _ from '@lodash';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScrumboardBoard, useGetScrumboardBoardQuery, useUpdateScrumboardBoardMutation } from '../ScrumboardApi';

/**
 * Form Validation Schema
 */
const schema = z.object({
	title: z.string().nonempty('You must enter a title'),
});

/**
 * The board title component.
 */
function BoardTitle() {
	const routeParams = useParams();
	const { boardId } = routeParams;

	const { data: board } = useGetScrumboardBoardQuery(boardId);

	const [updateBoard] = useUpdateScrumboardBoardMutation();

	const [formOpen, setFormOpen] = useState(false);

	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'onChange',
		defaultValues: {
			title: board?.title,
		},
		resolver: zodResolver(schema),
	});

	const { isValid, dirtyFields } = formState;

	useEffect(() => {
		if (!formOpen) {
			reset({
				title: board?.title,
			});
		}
	}, [formOpen, reset, board?.title]);

	function handleOpenForm(ev: MouseEvent<HTMLDivElement>) {
		ev.stopPropagation();
		setFormOpen(true);
	}

	function handleCloseForm() {
		setFormOpen(false);
	}

	function onSubmit(data: ScrumboardBoard) {
		updateBoard({ id: board.id, ...data });
		handleCloseForm();
	}

	return (
		<div className="flex items-center min-w-0">
			{formOpen ? (
				<ClickAwayListener onClickAway={handleCloseForm}>
					<form
						className="flex w-full"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							name="title"
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									variant="filled"
									margin="none"
									autoFocus
									hiddenLabel
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													type="submit"
													disabled={_.isEmpty(dirtyFields) || !isValid}
													size="large"
												>
													<OlorinSvgIcon>heroicons-outline:check</OlorinSvgIcon>
												</IconButton>
											</InputAdornment>
										),
									}}
								/>
							)}
						/>
					</form>
				</ClickAwayListener>
			) : (
				<div className="flex items-center justify-center space-x-12">
					<Typography
						className="text-18  sm:text-24 md:text-32 font-extrabold tracking-tight leading-none cursor-pointer"
						onClick={handleOpenForm}
						color="inherit"
					>
						{board?.title}
					</Typography>
					{board?.settings?.subscribed && <OlorinSvgIcon>heroicons-outline:eye</OlorinSvgIcon>}
				</div>
			)}
		</div>
	);
}

export default BoardTitle;
