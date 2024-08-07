import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import Button from '@mui/material/Button';
import { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import FormHelperText from '@mui/material/FormHelperText';
import PhoneNumberInput from './PhoneNumberInput';
import { ContactPhoneModel } from '../../models/ContactModel';
import { ContactPhoneNumber } from '../../ContactsApi';

type PhoneNumberSelectorProps = {
	value: ContactPhoneNumber[] | undefined;
	onChange: (T: ContactPhoneNumber[]) => void;
	className?: string;
	error?: boolean;
	helperText?: string;
};

/**
 * The phone number selector.
 */
const PhoneNumberSelector = forwardRef((props: PhoneNumberSelectorProps, ref: ForwardedRef<HTMLDivElement>) => {
	const { value, onChange, className, error, helperText } = props;

	return (
		<div
			className={clsx('w-full', className)}
			ref={ref}
		>
			{error && helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}

			{value.map((item, index) => (
				<PhoneNumberInput
					value={item}
					key={index}
					onChange={(val) => {
						onChange(value.map((_item, _index) => (index === _index ? val : _item)));
					}}
					onRemove={() => {
						onChange(value.filter((_item, _index) => index !== _index));
					}}
					hideRemove={value.length === 1}
				/>
			))}
			<Button
				className="group inline-flex items-center mt-2 -ml-4 py-2 px-4 rounded cursor-pointer"
				onClick={() => onChange([...value, ContactPhoneModel({})])}
			>
				<OlorinSvgIcon size={20}>heroicons-solid:plus-circle</OlorinSvgIcon>

				<span className="ml-8 font-medium text-secondary group-hover:underline">Add a phone number</span>
			</Button>
		</div>
	);
});

export default PhoneNumberSelector;
