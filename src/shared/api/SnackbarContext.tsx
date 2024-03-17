import React, { createContext, useMemo, useState } from "react"

export const SnackbarContext = createContext({
  text: "",
  showSnackbar: (_msg: string) => {},
  closeSnackbar: (_event: React.SyntheticEvent | Event, _reason?: string) => {},
  isOpen: false
})

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState<string>("")
  const [open, setOpen] = useState(false)

  const showSnackbar = (_msg: string) => {
    setText(_msg)
    setOpen(true)
  }

  const handleClose = (_event: React.SyntheticEvent | Event, _reason?: string) => {
    if (_reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const valueContext = useMemo(
    () => ({
      text,
      showSnackbar,
      closeSnackbar: handleClose,
      isOpen: open
    }),
    [text, open]
  )

  return <SnackbarContext.Provider value={valueContext}>{children}</SnackbarContext.Provider>
}
