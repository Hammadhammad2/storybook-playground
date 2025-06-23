import { Button } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'danger'],
		},
		label: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		loading: {
			control: 'boolean',
		},
		icon: {
			control: 'text',
			description: 'Emoji or icon text (e.g. 🔍)',
		},
		onClick: { action: 'clicked' },
	},
};

// ✅ Default Variants
export const Primary = {
	args: {
		label: 'Primary Button',
		variant: 'primary',
		disabled: false,
		loading: false,
	},
};

export const Secondary = {
	args: {
		label: 'Secondary Button',
		variant: 'secondary',
		disabled: false,
		loading: false,
	},
};

export const Danger = {
	args: {
		label: 'Delete',
		variant: 'danger',
		disabled: false,
		loading: false,
	},
};

// ✅ Special States
export const Disabled = {
	args: {
		label: 'Disabled',
		variant: 'primary',
		disabled: true,
	},
};

export const Loading = {
	args: {
		label: 'Loading...',
		variant: 'primary',
		loading: true,
	},
};

// ✅ Edge Cases
export const LongLabel = {
	args: {
		label: 'Click this button to submit your application and proceed to the next step',
		variant: 'primary',
	},
};

export const IconOnly = {
	args: {
		label: '',
		icon: '🔍',
		variant: 'secondary',
	},
};

export const WithIcon = {
	args: {
		label: 'Search',
		icon: '🔍',
		variant: 'secondary',
	},
};
