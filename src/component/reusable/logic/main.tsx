import React from 'react';
import { ModalProvider } from './modal';

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  );
};