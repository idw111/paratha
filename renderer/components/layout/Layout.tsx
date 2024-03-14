import { FC, ReactNode } from 'react';
import { Header } from './Header';

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <div className="w-full flex-auto bg-gray-50">{children}</div>
    </div>
  );
};
