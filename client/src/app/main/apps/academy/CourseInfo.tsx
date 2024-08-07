import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import clsx from 'clsx';
import CourseCategory from './CourseCategory';
import { Course } from './AcademyApi';

type CourseInfoProps = {
	course: Course;
	className?: string;
};

/**
 * The CourseInfo component.
 */
function CourseInfo(props: CourseInfoProps) {
	const { course, className } = props;

	if (!course) {
		return null;
	}

	return (
		<div className={clsx('w-full', className)}>
			<div className="flex items-center justify-between mb-16">
				<CourseCategory slug={course.category} />

				{course.progress.completed > 0 && (
					<OlorinSvgIcon
						className="text-green-600"
						size={20}
					>
						heroicons-solid:badge-check
					</OlorinSvgIcon>
				)}
			</div>

			<Typography className="text-16 font-medium">{course.title}</Typography>

			<Typography
				className="text-13 mt-2 line-clamp-2"
				color="text.secondary"
			>
				{course.description}
			</Typography>

			<Divider
				className="w-48 my-24 border-1"
				light
			/>

			<Typography
				className="flex items-center space-x-6 text-13"
				color="text.secondary"
			>
				<OlorinSvgIcon
					color="disabled"
					size={20}
				>
					heroicons-solid:clock
				</OlorinSvgIcon>
				<span className="whitespace-nowrap leading-none">{`${course.duration} minutes`}</span>
			</Typography>
			<Typography
				className="flex items-center space-x-6 text-13 mt-8"
				color="text.secondary"
			>
				<OlorinSvgIcon
					color="disabled"
					size={20}
				>
					heroicons-solid:academic-cap
				</OlorinSvgIcon>
				<span className="whitespace-nowrap leading-none">
					{course.progress.completed === 1 && 'Completed once'}
					{course.progress.completed === 2 && 'Completed twice'}
					{course.progress.completed > 2 && `Completed ${course.progress.completed} times`}
					{course.progress.completed <= 0 && 'Never completed'}
				</span>
			</Typography>
		</div>
	);
}

export default CourseInfo;
