import OlorinExample from '@olorin/core/OlorinExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import SimpleMapComponent from './examples/SimpleMap';
import SimpleMapRaw from './examples/SimpleMap.tsx?raw';

/**
 * GoogleMapReact Doc
 * This document provides information on how to use GoogleMapReact.
 */
function GoogleMapReactDoc() {
	return (
		<>
			<div className="flex w-full items-center justify-between mb-24">
				<Typography variant="h4">GoogleMapReact</Typography>
				<Button
					variant="contained"
					color="secondary"
					component="a"
					href="https://github.com/google-map-react/google-map-react"
					target="_blank"
					role="button"
					startIcon={<OlorinSvgIcon>heroicons-outline:external-link</OlorinSvgIcon>}
				>
					Reference
				</Button>
			</div>
			<Typography
				className="mb-16"
				component="p"
			>
				<code>google-map-react</code>
{' '}
is a component written over a small set of the Google Maps API.
			</Typography>

			<hr />

			<Typography
				className="text-32 mt-32 mb-8"
				component="h2"
			>
				Example Usages
			</Typography>
			<OlorinExample
				className="mb-64"
				component={SimpleMapComponent}
				raw={SimpleMapRaw}
			/>

			<Typography
				className="text-32 mt-32 mb-8"
				component="h2"
			>
				Demos
			</Typography>

			<ul>
				<li className="mb-8">
					<Link to="/dashboards/analytics">Analytics Dashboard</Link>
				</li>
			</ul>
		</>
	);
}

export default GoogleMapReactDoc;
