import { createContext, ReactNode, useContext, useState } from 'react'

type TUiProviderProps = {
  children: ReactNode
}

type TUiState = {
  [key: string]: boolean
}

const Context: any = createContext(null)

export function UiProvider({ children }: TUiProviderProps) {
  const [uiState, setUiState] = useState({})

  const setUi = (key: string, value: boolean) => {
    setUiState({
      ...uiState,
      [key]: value,
    })
  }

  return (
    <Context.Provider value={[uiState, setUi]}>{children}</Context.Provider>
  )
}

export function useUiContext(): [
  TUiState,
  (key: string, value: boolean) => void
] {
  return useContext(Context)
}
