import { Loader } from './Loader';

export default {
	title: 'Components/Loader',
	component: Loader,
	argTypes: {
		size: { control: 'number' },
		color: { control: 'color' },
	},
};

export const Default = {
	args: {
		size: 16,
		color: '#6366f1',
	},
};

export const Small = {
	args: {
		size: 8,
		color: '#0f172a',
	},
};

export const Large = {
	args: {
		size: 32,
		color: '#64748b',
	},
};
