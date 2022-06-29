/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement, ReactNode } from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-location';

interface LinkRouterProps {
    to: string;
    children: React.ReactNode;
}

export default function LinkRouter({ children, to }: LinkRouterProps): ReactElement {
    return (
        <Link component={RouterLink} to={to}>
            {children}
        </Link>
    );
}
