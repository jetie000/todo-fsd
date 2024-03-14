import { configLocalstorage } from "@/shared/config"
import React, { SetStateAction, createContext, useEffect, useState } from "react"

export const OptionsContext = createContext({
  language: localStorage.getItem(configLocalstorage.LANGUAGE) || "en",
  setLanguage: (_callback: SetStateAction<string>) => {}
})

export const OptionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem(configLocalstorage.LANGUAGE) || "en")

  useEffect(() => {
    if (language) localStorage.setItem(configLocalstorage.LANGUAGE, JSON.stringify(language))
  }, [language])

  return (
    <OptionsContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage
      }}
    >
      {children}
    </OptionsContext.Provider>
  )
}
