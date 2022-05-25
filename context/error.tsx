import { createContext, ReactNode, useContext, useState } from 'react'

type TErrorsProviderProps = {
  children: ReactNode
}

type TErrorsState = {
  [key: string]: string
}

const Context: any = createContext(null)

export function ErrorsProvider({ children }: TErrorsProviderProps) {
  const [errorsState, setErrorsState] = useState({})

  const setErrors = (error: TErrorsState) => {
    setErrorsState(error)
  }

  return (
    <Context.Provider value={[errorsState, setErrors]}>
      {children}
    </Context.Provider>
  )
}

export function useErrorContext(): [
  TErrorsState,
  (error: TErrorsState) => void
] {
  return useContext(Context)
}
