import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { OlorinRouteConfigType } from '@olorin/utils/OlorinUtils';

const Error404Page = lazy(() => import('./Error404Page'));
const Error500Page = lazy(() => import('./Error500Page'));

/**
 * The error pages config.
 */
const errorPagesConfig: OlorinRouteConfigType = {
	settings: {
		layout: {
			config: {},
		},
	},
	routes: [
		{
			path: 'pages/error',
			children: [
				{
					path: '',
					element: <Navigate to="404" />,
				},
				{
					path: '404',
					element: <Error404Page />,
				},
				{
					path: '500',
					element: <Error500Page />,
				},
			],
		},
	],
};

export default errorPagesConfig;
