import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { selectMainTheme } from '@olorin/core/OlorinSettings/olorinSettingsSlice';
import { motion } from 'framer-motion';
import { useAppDispatch } from 'app/store/hooks';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import FullCalendar from '@fullcalendar/react';
import { DatesSetArg } from '@fullcalendar/core';
import { MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import { openNewEventDialog } from './calendarAppSlice';
import CalendarViewMenu from './CalendarViewMenu';

type CalendarHeaderProps = {
	calendarRef: MutableRefObject<FullCalendar | null>;
	currentDate: DatesSetArg;
	onToggleLeftSidebar: () => void;
};

/**
 * The calendar header.
 */
function CalendarHeader(props: CalendarHeaderProps) {
	const { calendarRef, currentDate, onToggleLeftSidebar } = props;

	const mainTheme = useSelector(selectMainTheme);
	const calendarApi = () => calendarRef.current.getApi();
	const dispatch = useAppDispatch();

	function handleViewChange(viewType: string) {
		calendarApi().changeView(viewType);
	}

	return (
		<div className="flex flex-col md:flex-row w-full p-12 justify-between z-10 container">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<IconButton
						onClick={() => onToggleLeftSidebar()}
						aria-label="open left sidebar"
						size="small"
					>
						<OlorinSvgIcon>heroicons-outline:menu</OlorinSvgIcon>
					</IconButton>

					<Typography className="hidden sm:flex text-2xl font-semibold tracking-tight whitespace-nowrap mx-16">
						{currentDate?.view.title}
					</Typography>
				</div>

				<div className="flex items-center">
					<Tooltip title="Previous">
						<IconButton
							aria-label="Previous"
							onClick={() => calendarApi().prev()}
						>
							<OlorinSvgIcon size={20}>
								{mainTheme.direction === 'ltr'
									? 'heroicons-solid:chevron-left'
									: 'heroicons-solid:chevron-right'}
							</OlorinSvgIcon>
						</IconButton>
					</Tooltip>
					<Tooltip title="Next">
						<IconButton
							aria-label="Next"
							onClick={() => calendarApi().next()}
						>
							<OlorinSvgIcon size={20}>
								{mainTheme.direction === 'ltr'
									? 'heroicons-solid:chevron-right'
									: 'heroicons-solid:chevron-left'}
							</OlorinSvgIcon>
						</IconButton>
					</Tooltip>

					<Tooltip title="Today">
						<div>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1, transition: { delay: 0.3 } }}
							>
								<IconButton
									aria-label="today"
									onClick={() => calendarApi().today()}
									size="large"
								>
									<OlorinSvgIcon>heroicons-outline:calendar</OlorinSvgIcon>
								</IconButton>
							</motion.div>
						</div>
					</Tooltip>
				</div>
			</div>

			<motion.div
				className="flex items-center justify-end md:justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.3 } }}
			>
				<IconButton
					className="mx-8"
					aria-label="add"
					onClick={(ev) =>
						dispatch(
							openNewEventDialog({
								jsEvent: ev.nativeEvent,
								start: new Date(),
								end: new Date(),
							}),
						)}
				>
					<OlorinSvgIcon>heroicons-outline:plus-circle</OlorinSvgIcon>
				</IconButton>

				<CalendarViewMenu
					currentDate={currentDate}
					onChange={handleViewChange}
				/>
			</motion.div>
		</div>
	);
}

export default CalendarHeader;
