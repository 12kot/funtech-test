import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

export const Portal: React.FC<Props> = ({ children }) => {
  return createPortal(children, document.body);
};
