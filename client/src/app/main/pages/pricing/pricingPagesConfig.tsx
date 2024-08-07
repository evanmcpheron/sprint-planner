import { Navigate } from 'react-router-dom';

import { OlorinRouteConfigType } from '@olorin/utils/OlorinUtils';
import ModernPricingPage from './modern/ModernPricingPage';
import SimplePricingPage from './simple/SimplePricingPage';
import SinglePricingPage from './single/SinglePricingPage';
import TablePricingPage from './table/TablePricingPage';

/**
 * The pricing pages config.
 */
const pricingPagesConfig: OlorinRouteConfigType = {
	settings: {
		layout: {
			config: {},
		},
	},
	routes: [
		{
			path: 'pages/pricing',
			children: [
				{
					path: '',
					element: <Navigate to="modern" />,
				},
				{
					path: 'modern',
					element: <ModernPricingPage />,
				},
				{
					path: 'simple',
					element: <SimplePricingPage />,
				},
				{
					path: 'single',
					element: <SinglePricingPage />,
				},
				{
					path: 'table',
					element: <TablePricingPage />,
				},
			],
		},
	],
};

export default pricingPagesConfig;
