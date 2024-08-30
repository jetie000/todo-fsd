import React, { createContext, useState } from "react"

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

  return (
    <SnackbarContext.Provider
      value={{
        text: text,
        showSnackbar: showSnackbar,
        closeSnackbar: handleClose,
        isOpen: open
      }}
    >
      {children}
    </SnackbarContext.Provider>
  )
}
