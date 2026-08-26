"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  LanguageCode,
  SUPPORTED_LANGUAGES,
  LanguageInfo,
  TranslationSchema,
  translations,
} from "@/lib/translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationSchema;
  currentLanguageInfo: LanguageInfo;
  supportedLanguages: LanguageInfo[];
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    try {
      localStorage.removeItem("zelnex_language");
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    } catch {
      // Ignore
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    if (translations[code]) {
      setLanguageState(code);
      const info = SUPPORTED_LANGUAGES.find((l) => l.code === code);
      if (typeof document !== "undefined") {
        document.documentElement.lang = code;
        document.documentElement.dir = info?.dir || "ltr";
      }
      try {
        localStorage.setItem("zelnex_language", code);
      } catch {
        // Ignore
      }
    }
  };

  const currentLanguageInfo =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) ||
    SUPPORTED_LANGUAGES[0];

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.en,
    currentLanguageInfo,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isRTL: currentLanguageInfo.dir === "rtl",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
