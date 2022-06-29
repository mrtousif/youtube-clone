import React, { Suspense, ReactElement } from 'react';
import { Outlet, ReactLocation, Router } from 'react-location';
import LinearProgress from '@mui/material/LinearProgress';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import Home from './pages/Home';
import Login from './pages/SignIn';
import ErrorBoundary from '@/components/ErrorBoundary';

// Set up a ReactLocation instance
const location = new ReactLocation();

// const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/Signup'));

function App(): ReactElement {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <ErrorBoundary>
            <SnackbarProvider maxSnack={3}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Suspense fallback={<LinearProgress />}>
                        <Router
                            location={location}
                            routes={[
                                { path: '/', element: <Home /> },
                                {
                                    path: 'login',
                                    element: <Login />,
                                },
                                {
                                    path: 'signup',
                                    element: <SignUp />,
                                },
                            ]}
                        >
                            <Outlet /> {/* Start rendering router matches */}
                        </Router>
                    </Suspense>
                </ThemeProvider>
            </SnackbarProvider>
        </ErrorBoundary>
    );
}

export default App;
