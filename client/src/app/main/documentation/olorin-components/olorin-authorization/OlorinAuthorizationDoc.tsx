import OlorinHighlight from '@olorin/core/OlorinHighlight';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import AdminRoleExampleConfigRaw from 'src/app/main/auth/admin-role-example/AdminRoleExampleConfig.tsx?raw';

/**
 * OlorinAuthorization Doc
 * This document provides information on how to use OlorinAuthorization.
 */
function OlorinAuthorizationDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				OlorinAuthorization
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				OlorinAuthorization is a higher-order component that handles the authorization logic of a React app. It
				checks the provided auth property from OlorinRouteItemType against the current logged-in user role.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Usage
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To use OlorinAuthorization, you need to import it from @olorin/core/OlorinAuthorization and wrap it
				around the component that needs to be authorized. The OlorinAuthorization component takes in the
				following props:
			</Typography>

			<Paper className="max-w-md my-16">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className="font-semibold text-14">Prop Name</TableCell>
							<TableCell className="font-semibold text-14">Type</TableCell>
							<TableCell className="font-semibold text-14">Description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>userRole</TableCell>
							<TableCell>string or array of strings</TableCell>
							<TableCell>Represents the roles that are authorized to access the component.</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>loginRedirectUrl</TableCell>
							<TableCell>string</TableCell>
							<TableCell>
								Represents the URL to redirect to if the user is not authorized to access the component.
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>children</TableCell>
							<TableCell>ReactNode</TableCell>
							<TableCell>The child component that needs to be authorized.</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>

			<Typography
				className="mt-32 mb-8"
				variant="subtitle2"
			>
				Example Usage:
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-jsx mb-32"
			>
				{`
                import { OlorinAuthorization } from '@olorin/core';

                function MyComponent() {
                    return (
                        <div>
                            <h1>My Component</h1>
                        </div>
                    );
                }

                function App() {
                    return (
                        <OlorinAuthorization userRole={['admin', 'editor']} loginRedirectUrl="/login">
                            <MyComponent />
                        </OlorinAuthorization>
                    );
                }
                `}
			</OlorinHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				In this example, MyComponent is wrapped in OlorinAuthorization and can only be accessed by users with
				the roles admin or editor. If the user is not authorized, they will be redirected to the login page
				specified in loginRedirectUrl.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Note that OlorinAuthorization uses the AppContext to get the list of routes in the app. Therefore, it
				needs to be used within a component that is wrapped in AppContextProvider.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				<code>OlorinAuthorization</code>
{' '}
is the authorization component of the Olorin React. It restricts
				unauthorized user access by looking at
<b>route configs</b>
{' '}
and
<b>user.role</b>
.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Configuration
			</Typography>

			<Typography
				className="text-16 mt-16 mb-10 font-700"
				variant="h6"
			>
				Route Configuration:
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You need to define authorization (auth) in the
{' '}
<b>route config files</b>
{' '}
to control the access via
				permission roles.
			</Typography>

			<Typography
				className="mt-32 mb-8"
				variant="subtitle2"
			>
				Example Usage:
			</Typography>

			<Typography
				className="inline-block mb-8 italic"
				component="code"
			>
				src/app/main/auth/admin-role-example/AdminRoleExampleConfig.tsx
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-jsx"
			>
				{AdminRoleExampleConfigRaw}
			</OlorinHighlight>

			<Typography
				className="my-16"
				component="p"
			>
				You can also give different auth values for individual routes with writing auth value inside the route
				object.
			</Typography>

			<Paper className="max-w-md my-16">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className="font-semibold text-14">Authorization Role (auth) options</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>
								<code>null</code>
							</TableCell>
							<TableCell>Do not check, allow everyone</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<code>[]</code>
							</TableCell>
							<TableCell>Only guest allowed</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<code>[admin,user]</code>
							</TableCell>
							<TableCell>Only 'admin' and 'user' roles are allowed</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>

			<Typography
				className="mt-48 mb-8"
				variant="h6"
			>
				User.role Configuration:
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				User
{' '}
<b>role</b>
{' '}
and
{' '}
<b>data</b>
{' '}
are stored at
{' '}
<b>user</b>
{' '}
in the redux store.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				After successful login user.role will be updated and the OlorinAuthorization automatically redirects the
				authorized user.
			</Typography>

			<Typography
				className="inline-block mb-8 italic"
				component="code"
			>
				app/auth/user/store/userSlice.tsx (initial user state)
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-js mb-32"
			>
				{`  
                const initialState = {
                role: [],//guest
                data: {
                    'displayName': 'John Doe',
                    'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
                    'email'      : 'johndoe@withinpixels.com',
                    shortcuts    : [
                      'calendar',
                      'mail',
                      'contacts',
                      'todo'
                    ]
                  }
                };
       `}
			</OlorinHighlight>

			<Paper className="max-w-md my-16">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className="font-semibold text-14">User Role options</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>
								<code>null</code>
{' '}
or
<code>undefined</code>
{' '}
or
<code>[]</code>
							</TableCell>
							<TableCell>Guest</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<code>['admin','user']</code>
{' '}
(array)
							</TableCell>
							<TableCell>User has roles 'admin' and 'user'</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<code>"admin"</code>
{' '}
(string)
							</TableCell>
							<TableCell>User has 'admin' role</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Paper>

			<Typography
				className="mt-48 mb-8"
				variant="h6"
			>
				Navigation Item Configuration:
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You can control the navigation
{' '}
<b>item/group/collapse</b>
{' '}
visibility by adding
{' '}
<b>auth</b>
				property in
{' '}
<code>app/configs/NavigationConfig.tsx</code>
.
			</Typography>

			<Typography
				className="mt-32 mb-8"
				variant="subtitle2"
			>
				Example Usage:
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-js mb-32"
			>
				{`
					 {
						'id'   : 'only-admin-navigation-item',
						'title': 'Nav item only for Admin',
						'type' : 'item',
						'auth' : authRoles.admin,//['admin']
						'url'  : '/auth/admin-role-example',
						'icon' : 'verified_user'
					  },
				`}
			</OlorinHighlight>

			<Typography
				className="mt-48 mb-4"
				variant="h5"
			>
				Default Auth value:
			</Typography>

			<Typography component="p">
				If you don't want to set auth on every page config;
				<br />
				you can give defaultAuth role value in the file
{' '}
<code>src/app/configs/settingsConfig.tsx</code>
				<br />
				<br />
				The individual route configs which has auth option won't be overridden.
			</Typography>

			<Typography
				className="mt-24 mb-4"
				variant="h6"
			>
				Making the whole app auth protected by default:
			</Typography>

			<Typography
				className="mb-12"
				variant="subtitle2"
			>
				src/app/configs/settingsConfig.tsx
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-js mb-32"
			>
				{`
					defaultAuth:['admin','staff','user']
				`}
			</OlorinHighlight>

			<Typography
				className="mt-24 mb-4"
				variant="h6"
			>
				Making the whole app without authorization by default
			</Typography>

			<Typography
				className="mb-12"
				variant="subtitle2"
			>
				src/app/configs/settingsConfig.tsx
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-js mb-32"
			>
				{`
				defaultAuth: null
				`}
			</OlorinHighlight>

			<Typography
				className="mt-48 mb-4"
				variant="h5"
			>
				Redirect the logged-in user to a specific route depending on his role
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Before dispatching
{' '}
<b>SET_USER_DATA</b>
{' '}
action you can set loginRedirectUrl on
			</Typography>

			<Typography
				className="inline-block mb-8 italic"
				component="code"
			>
				app/auth/user/store/userSlice.tsx
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-js mb-32"
			>
				{`
				export const setUser = createAsyncThunk('user/setUser', async (user, { dispatch, getState }) => {
				
				/*
				You can redirect the logged-in user to a specific route depending on his role
				*/
				if (user.data.loginRedirectUrl) {
					settingsConfig.loginRedirectUrl = user.data.loginRedirectUrl; // for example 'apps/academy'
				}
           		 return user;
          });
				`}
			</OlorinHighlight>
			<Typography
				className="mt-48 mb-4"
				variant="h5"
			>
				Uncaught Error: Maximum update depth exceeded: Infinite loops
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				If you are getting this error, make sure authenticated user has rights to access main route
{' '}
<b>"/"</b>
				or it's redirected route path.
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				After successful login, every authenticated user should be able to access to main route path
{' '}
<b>"/"</b>
{' '}
				or redirected route path.
			</Typography>
		</>
	);
}

export default OlorinAuthorizationDoc;
