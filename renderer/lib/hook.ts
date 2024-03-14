import { Dispatch, SetStateAction, useState } from 'react';

export const useObjectState = <S extends {}>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, (obj: Record<string, any>) => void] => {
  const [state, setState] = useState<S>(initialState);
  const updateState = (obj: Record<string, any>) => setState((state) => ({ ...state, ...obj }));
  return [state, setState, updateState];
};
