import React from 'react';
import { clsx } from 'clsx';
import { Loader } from '../Loader/Loader';

export const Button = ({
	label,
	variant = 'primary',
	onClick,
	disabled = false,
	loading = false,
	icon,
}) => {
	const baseClasses =
		'inline-flex items-center gap-2 px-4 py-2 font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';

	const variants = {
		primary: 'bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-400',
		secondary: 'bg-white border border-gray-300 text-slate-700 hover:bg-gray-100',
		danger: 'bg-red-600 text-white hover:bg-red-600 focus:ring-red-400',
	};

	return (
		<button
			className={clsx(baseClasses, variants[variant])}
			onClick={onClick}
			disabled={disabled || loading}
			type='button'
		>
			{loading && <Loader size={16} color='white' />}
			{icon && !loading && <span>{icon}</span>}
			<span>{label}</span>
		</button>
	);
};
