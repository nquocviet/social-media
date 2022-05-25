import { ErrorsProvider } from '@/context/error'
import { UiProvider } from '@/context/ui'
import { ReactNode } from 'react'

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ErrorsProvider>
      <UiProvider>{children}</UiProvider>
    </ErrorsProvider>
  )
}
