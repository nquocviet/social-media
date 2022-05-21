import React, { ReactNode, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from 'next-i18next'
import { Button } from '../Button'
import { useOnClickOutside } from '@/hooks/index'

type TModalConfirmProps = {
  open: boolean
  title: string
  content: ReactNode | ReactNode[]
  rejectMessage?: string
  confirmMessage?: string
  onClose: () => void
  onSubmit: () => void
}

const ModalConfirm = ({
  open,
  title,
  content,
  rejectMessage = 'cancel',
  confirmMessage = 'confirm',
  onClose,
  onSubmit,
}: TModalConfirmProps) => {
  const { t } = useTranslation('common')
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, onClose)

  return open
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 z-modal flex h-screen w-screen items-center justify-center bg-zinc-900/50">
          <div className="w-full max-w-[360px] -translate-y-1/2 px-4">
            <div
              className="animate-show-down overflow-hidden rounded-xl bg-white py-4 px-6 shadow-lg"
              ref={modalRef}
            >
              <h2 className="text-center text-xl font-semibold">{title}</h2>
              <div className="flex flex-col items-stretch">
                <div className="pt-4 pb-6 text-center">{content}</div>
                <div className="-mx-3 flex items-stretch">
                  <div className="flex-1 px-3">
                    <Button
                      color="neutral"
                      size="sm"
                      variant="outline"
                      onClick={onClose}
                      fluid
                    >
                      {t(`action.${rejectMessage}`)}
                    </Button>
                  </div>
                  <div className="flex-1 px-3">
                    <Button
                      color="primary"
                      size="sm"
                      variant="contained"
                      onClick={onSubmit}
                      fluid
                    >
                      {t(`action.${confirmMessage}`)}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null
}

export default ModalConfirm
