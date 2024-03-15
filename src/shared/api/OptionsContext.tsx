import { configLocalstorage, languages } from "@/shared/config"
import React, { SetStateAction, createContext, useEffect, useState } from "react"

export const OptionsContext = createContext({
  language: (localStorage.getItem(configLocalstorage.LANGUAGE) as keyof typeof languages) || "en",
  setLanguage: (_callback: SetStateAction<keyof typeof languages>) => {}
})

export const OptionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<keyof typeof languages>(
    (localStorage.getItem(configLocalstorage.LANGUAGE) as keyof typeof languages) || "en"
  )

  useEffect(() => {
    if (language) localStorage.setItem(configLocalstorage.LANGUAGE, language)
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
