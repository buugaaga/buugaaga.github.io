import { useEffect } from 'react';

const useReduceImage = ( handler) => {
  useEffect(() => {
    const listener = event => {
      handler()
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("scroll", listener);
    return () => {
      document.addEventListener("mousedown", listener);
      document.removeEventListener("scroll", listener);
    }
  })
}
export { useReduceImage };