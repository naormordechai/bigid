import { useState } from 'react';

const isNil = (value: any) => value === null || value === undefined;

export const useForm = <F>(
	initialState: F,
	onSubmit: (formData: F) => void
): { formData: F; handleInputChange: (event: any | null, name?: string, value?: any) => void; handleSubmit: (e: React.SyntheticEvent) => void } => {
	const [formData, setFormData] = useState<F>(initialState);

	const handleInputChange = (event: any | null, name?: string, value?: any) => {
		setFormData({ ...formData, [event?.target?.name || name || '']: !isNil(event?.target?.value) ? event?.currentTarget.value : value });
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	return { formData, handleInputChange, handleSubmit };
};