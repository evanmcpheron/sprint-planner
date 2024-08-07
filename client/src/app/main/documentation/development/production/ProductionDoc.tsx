import OlorinHighlight from '@olorin/core/OlorinHighlight';
import Typography from '@mui/material/Typography';

/**
 * Production Doc
 * This document provides information on how to build the application for production.
 */
function ProductionDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Production
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The following command builds the application into an output directory
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-bash my-16"
			>
				{' npm run build '}
			</OlorinHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				compiles the application into
{' '}
<code>/build</code>
{' '}
directory
			</Typography>
		</>
	);
}

export default ProductionDoc;
