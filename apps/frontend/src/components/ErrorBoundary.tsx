import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/react';
import env from '@/config';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div role="alert">
            <Alert
                severity="error"
                action={
                    <Button color="inherit" onClick={resetErrorBoundary}>
                        Try again
                    </Button>
                }
            >
                <AlertTitle>Something went wrong: </AlertTitle>
                {error.message}
            </Alert>
        </div>
    );
}

const SentryFallbackComponent = () => {
    return <div>An error has occurred</div>;
};

export default function AppErrorBoundary({ children }: { children: React.ReactNode }) {
    if (env.isProduction) {
        return <Sentry.ErrorBoundary fallback={<SentryFallbackComponent />}>{children}</Sentry.ErrorBoundary>;
    }
    return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
}
