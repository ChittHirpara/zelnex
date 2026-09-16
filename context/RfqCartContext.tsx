"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface RfqItem {
  id: string;
  composition: string;
  dosage?: string;
  dosageForm: string;
  categoryName: string;
}

interface RfqCartContextType {
  items: RfqItem[];
  itemCount: number;
  addItem: (item: RfqItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: RfqItem) => void;
  isInCart: (id: string) => boolean;
  clearCart: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const RfqCartContext = createContext<RfqCartContextType | undefined>(undefined);

const STORAGE_KEY = "zelnex_rfq_cart_v1";

export function RfqCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RfqItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(parsed);
        }
      }
    } catch (e) {
      console.warn("Failed to load RFQ cart from localStorage:", e);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  // Save to localStorage when items update
  useEffect(() => {
    if (!hasLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save RFQ cart to localStorage:", e);
    }
  }, [items, hasLoaded]);

  const addItem = (item: RfqItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleItem = (item: RfqItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isInCart = (id: string) => {
    return items.some((i) => i.id === id);
  };

  const clearCart = () => {
    setItems([]);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <RfqCartContext.Provider
      value={{
        items,
        itemCount: items.length,
        addItem,
        removeItem,
        toggleItem,
        isInCart,
        clearCart,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </RfqCartContext.Provider>
  );
}

export function useRfqCart() {
  const context = useContext(RfqCartContext);
  if (!context) {
    throw new Error("useRfqCart must be used within an RfqCartProvider");
  }
  return context;
}
