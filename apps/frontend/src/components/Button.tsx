import React from 'react';
import Button from '@mui/material/Button';
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function MuiButton({ onClick, children }: ButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default MuiButton;