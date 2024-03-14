import { FC } from 'react';

export const Header: FC<{}> = ({}) => {
  return (
    <header className="flex h-16 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-[#000]/80">Paratha</h1>
        <h2 className="text-xs text-[#000]/50">Create Lambda Layers with Ease</h2>
      </div>
    </header>
  );
};
