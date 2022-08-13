import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

import { Provider } from 'urql';
import { client } from '@/graphql';

function App() {
    return (
        
            <Provider value={client}>
                <CssBaseline />
                <Notifications />
                <HotKeys />
                <SW />
                <BrowserRouter>
                    <Header />
                    <Sidebar />
                    <Pages />
                </BrowserRouter>
            </Provider>
      
    );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
