import { useEffect } from 'react';

const useReduceImage = ( handler) => {
  useEffect(() => {
    const listener = event => {
      console.log(event.type)
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