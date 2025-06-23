import React from 'react';

export const Loader = ({ size = 20, color = 'currentColor' }) => {
	return (
		<svg
			role='img'
			aria-label='Loading'
			className='animate-spin'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
		>
			<circle
				className='opacity-25'
				cx='12'
				cy='12'
				r='10'
				stroke={color}
				strokeWidth='4'
			/>
			<path
				className='opacity-75'
				fill={color}
				d='M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z'
			/>
		</svg>
	);
};
