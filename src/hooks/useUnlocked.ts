import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "recipes_unlocked";
const UNLOCK_EVENT = "recipes-unlocked";

const readUnlocked = () =>
  typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1";

/**
 * Shared subscriber/unlock state.
 * Backed by localStorage so it works the same way across Menu (prices)
 * and Recipes (steps & tips) — unlocking in one place unlocks both.
 */
export const useUnlocked = () => {
  const [unlocked, setUnlockedState] = useState<boolean>(readUnlocked);

  useEffect(() => {
    const sync = () => setUnlockedState(readUnlocked());
    window.addEventListener("storage", sync);
    window.addEventListener(UNLOCK_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(UNLOCK_EVENT, sync);
    };
  }, []);

  const markUnlocked = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "1");
    setUnlockedState(true);
    window.dispatchEvent(new Event(UNLOCK_EVENT));
  }, []);

  return { unlocked, markUnlocked };
};
