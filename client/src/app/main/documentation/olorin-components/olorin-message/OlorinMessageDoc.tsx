import OlorinHighlight from '@olorin/core/OlorinHighlight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'app/store/hooks';
import { showMessage } from '@olorin/core/OlorinMessage/olorinMessageSlice';

/**
 * OlorinMessage Doc
 * This document provides information on how to use the OlorinMessage.
 */
function OlorinMessageDoc() {
	const dispatch = useAppDispatch();

	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				OlorinMessage
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				<code>OlorinMessage</code>
{' '}
is a simple snackbar trigger for easily showing messages via redux action. It
				should be located in the theme layouts.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Usage
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You can show messages anywhere with dispatching the action showMessage, it is using Material-UI's
				snackbar so you can pass the props in the object:
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-jsx"
			>
				{`
                                    <Button 
                                        onClick={()=> dispatch(
                                            showMessage({
                                                message     : 'Hi, how are you?',//text or html
                                                autoHideDuration: 6000,//ms
                                                anchorOrigin: {
                                                    vertical  : 'top',//top bottom
                                                    horizontal: 'right'//left center right
                                                },
                                                variant: 'success'//success error info warning null
                                            }))}
                                    >
                                        Top - Right
                                    </Button>
                            `}
			</OlorinHighlight>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Example
			</Typography>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Position
			</Typography>

			<div>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								anchorOrigin: {
									vertical: 'top',
									horizontal: 'right',
								},
							}),
						)}
				>
					Top - Right
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								anchorOrigin: {
									vertical: 'top',
									horizontal: 'center',
								},
							}),
						)}
				>
					Top-Center
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								anchorOrigin: {
									vertical: 'top',
									horizontal: 'left',
								},
							}),
						)}
				>
					Top-Left
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								anchorOrigin: {
									vertical: 'bottom',
									horizontal: 'right',
								},
							}),
						)}
				>
					Bottom-Right
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								anchorOrigin: {
									vertical: 'bottom',
									horizontal: 'center',
								},
							}),
						)}
				>
					Bottom-Center
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								anchorOrigin: {
									vertical: 'bottom',
									horizontal: 'left',
								},
							}),
						)}
				>
					Bottom-Left
				</Button>
			</div>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Variants
			</Typography>

			<div>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
							}),
						)}
				>
					Default
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								variant: 'success',
							}),
						)}
				>
					Success
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								variant: 'warning',
							}),
						)}
				>
					Warning
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								variant: 'error',
							}),
						)}
				>
					Error
				</Button>
				<Button
					onClick={() =>
						dispatch(
							showMessage({
								message: 'Hi, how are you?',
								variant: 'info',
							}),
						)}
				>
					Info
				</Button>
			</div>
		</>
	);
}

export default OlorinMessageDoc;
