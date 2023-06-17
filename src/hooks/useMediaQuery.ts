import { useState, useEffect } from "react";

const useMediaQuery = (query: string, setMobileToTrue?: boolean) => {
  const mobileState = setMobileToTrue || false;
  const [matches, setMatches] = useState(mobileState);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
