import { Tabs } from './Tabs';

export default {
	title: 'Components/Tabs',
	component: Tabs,
	tags: ['autodocs'],
	argTypes: {
		defaultActive: {
			control: { type: 'number', min: 0 },
			description: 'Index of the initially active tab',
		},
		onTabChange: {
			action: 'tabChanged',
			description: 'Fires when a new tab is selected',
		},
	},
};

const basicTabs = [
	{ label: 'Overview', content: <p>This is the overview content.</p> },
	{ label: 'Features', content: <p>Features of the product go here.</p> },
	{ label: 'Pricing', content: <p>Choose a plan that suits you.</p> },
];

const iconTabs = [
	{ label: 'Overview', icon: '📄', content: <p>Docs and intro content.</p> },
	{ label: 'Features', icon: '🚀', content: <p>Cool stuff here.</p> },
	{ label: 'Pricing', icon: '💰', content: <p>Subscription plans.</p> },
];

export const Default = {
	name: 'Default Tabs',
	args: {
		tabs: basicTabs,
		defaultActive: 0,
	},
	parameters: {
		docs: {
			description: {
				story: 'Default usage of the Tabs component with 3 basic tabs.',
			},
		},
	},
};

export const SecondTabActive = {
	name: 'Second Tab Active',
	args: {
		tabs: basicTabs,
		defaultActive: 1,
	},
	parameters: {
		docs: {
			description: {
				story: 'Starts with the second tab ("Features") active by default.',
			},
		},
	},
};

export const WithIcons = {
	name: 'Tabs with Icons',
	args: {
		tabs: iconTabs,
		defaultActive: 0,
	},
	parameters: {
		docs: {
			description: {
				story: 'Tabs enhanced with emojis/icons to represent each section visually.',
			},
		},
	},
};

export const RoundedTabs = {
	name: 'Pill Style Tabs',
	args: {
		tabs: [
			{ label: 'Design', icon: '🎨', content: <p>Design tools and UI ideas.</p> },
			{ label: 'Code', icon: '💻', content: <p>Code snippets and dev tips.</p> },
			{ label: 'Deploy', icon: '🚀', content: <p>Deployment guides and CI/CD.</p> },
		],
		defaultActive: 0,
		variant: 'pill',
	},
	parameters: {
		docs: {
			description: {
				story: 'Tabs with a rounded background pill style when active.',
			},
		},
	},
};
