import { useEffect } from 'react';

const useKeyUp = (keyUpHandler: (ev: KeyboardEvent) => void): void => {
  const handleKeyUp = (ev: KeyboardEvent): void => {
    keyUpHandler(ev);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);
};

export default useKeyUp;
