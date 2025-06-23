import React, { useState } from 'react';
import { clsx } from 'clsx';

export const Tabs = ({ tabs, defaultActive = 0, onTabChange, variant = 'underline' }) => {
	const [activeIndex, setActiveIndex] = useState(defaultActive);

	const handleTabClick = index => {
		setActiveIndex(index);
		onTabChange?.(tabs[index]);
	};

	const isPill = variant === 'pill';

	return (
		<div className='w-full'>
			{/* Tab list */}
			<div
				role='tablist'
				className={clsx('flex space-x-2', !isPill && 'border-b border-gray-200')}
			>
				{tabs.map((tab, index) => {
					const isActive = index === activeIndex;
					return (
						<button
							type='button'
							key={tab.label}
							role='tab'
							aria-selected={isActive}
							aria-controls={`tab-panel-${index}`}
							onClick={() => handleTabClick(index)}
							className={clsx(
								'px-4 py-2 text-sm transition-all duration-200',
								isPill
									? isActive
										? 'bg-indigo-100 text-indigo-700 rounded-full border-2 border-indigo-600'
										: 'text-gray-500 hover:bg-gray-100 rounded-full'
									: isActive
									? 'border-b-2 border-indigo-500 text-indigo-600 font-bold'
									: 'border-b-2 border-transparent text-gray-500 hover:text-indigo-500 font-medium'
							)}
						>
							{tab.icon && <span className='mr-1'>{tab.icon}</span>}
							{tab.label}
						</button>
					);
				})}
			</div>

			{/* Tab content */}
			<div id={`tab-panel-${activeIndex}`} role='tabpanel' className='pt-4'>
				{tabs[activeIndex]?.content}
			</div>
		</div>
	);
};
