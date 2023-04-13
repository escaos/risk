import { useState } from 'react';

export const useToggle = (defaultTrue?: boolean) => {
  const [state, setState] = useState<boolean>(!!defaultTrue);

  return { state, toggle: () => setState(!state) };
};
