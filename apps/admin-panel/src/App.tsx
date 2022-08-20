import CssBaseline from '@mui/material/CssBaseline';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import ServiceWorker from '@/sections/SW';
import { Admin, Resource,ListGuesser } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
// import buildHasuraProvider from 'ra-data-hasura';
// import { client } from '@/graphql';

// const hasuraDataProvider = await buildHasuraProvider({
//     client,
// });
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
    return (
        <>
            <CssBaseline />
            <Notifications />
            <HotKeys />
            <ServiceWorker />
            <Admin dataProvider={dataProvider}>
                <Resource name="posts" list={ListGuesser} />
                <Resource name="comments" list={ListGuesser} />          
            </Admin>
        </>
    );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
