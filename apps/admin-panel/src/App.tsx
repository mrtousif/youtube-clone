import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import ServiceWorker from '@/sections/SW';
import { Admin, Resource, ListGuesser, DataProvider } from 'react-admin';
// import jsonServerProvider from "ra-data-json-server";
import buildHasuraProvider from 'ra-data-hasura';
import LinearProgress from '@mui/material/LinearProgress';
import { client } from '@/graphql';

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
    const [dataProvider, setDataProvider] = useState<DataProvider | null>(
        null
      );

    useEffect(() => {
        const buildDataProvider = async () => {
        const dataProvider = await buildHasuraProvider({
                client,
            });
        setDataProvider(() => dataProvider);
        };
        buildDataProvider();
    }, []);

    if (!dataProvider) return <LinearProgress/>;

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