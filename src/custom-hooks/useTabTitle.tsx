import { useEffect } from 'react';

// this custom hook sets the document title to the provided title when the component mounts and restores the previous title when it unmounts
export function useTabTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    }
  }, [title]);
}
