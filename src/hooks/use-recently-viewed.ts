"use client";

import { useEffect, useState } from "react";

const MAX_ITEMS = 8;
const STORAGE_KEY = "recently-viewed";

export function useRecentlyViewed() {
  const [recentIds, setRecentIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setRecentIds(JSON.parse(stored));
    }
  }, []);

  const addToRecentlyViewed = (productId: string) => {
    setRecentIds((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      const updated = [productId, ...filtered].slice(0, MAX_ITEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return { recentIds, addToRecentlyViewed };
}
