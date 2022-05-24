import React, { ReactNode, useRef } from 'react'
import ReactDOM from 'react-dom'
import { X } from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import { Button } from '../Button'
import { useOnClickOutside } from '@/hooks/index'
import { Divider } from '../Divider'
import { Heading } from '../Heading'

type TModalProps = {
  open: boolean
  title: string
  children: ReactNode | ReactNode[]
  size?: number
  rejectMessage?: string
  confirmMessage?: string
  disableButtons?: boolean
  onClose: () => void
  onSubmit: () => void
}

const Modal = ({
  open,
  title,
  children,
  size = 480,
  rejectMessage = 'cancel',
  confirmMessage = 'confirm',
  disableButtons = false,
  onClose,
  onSubmit,
}: TModalProps) => {
  const { t } = useTranslation('common')
  const modalRef = useRef(null)

  useOnClickOutside(modalRef, onClose)

  return open
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 z-modal flex h-screen w-screen items-center justify-center bg-zinc-900/50">
          <div
            className="w-full max-w-modal -translate-y-16 px-4"
            style={{
              ['--modal-width' as any]: `${size}px`,
            }}
          >
            <div
              className="animate-show-down overflow-hidden rounded-xl bg-white shadow"
              ref={modalRef}
            >
              <div className="flex items-center justify-between py-2 pl-6 pr-2">
                <Heading className="text-xl">{title}</Heading>
                <button className="rounded-md p-2" onClick={onClose}>
                  <X size={20} />
                </button>
              </div>
              <Divider />
              <div className="flex flex-col items-stretch p-6">{children}</div>
              {!disableButtons && (
                <>
                  <Divider />
                  <div className="flex items-stretch justify-end py-4 px-6">
                    <Button
                      color="neutral"
                      size="sm"
                      variant="text"
                      className="mr-4"
                      onClick={onClose}
                    >
                      {t(`action.${rejectMessage}`)}
                    </Button>
                    <Button
                      color="primary"
                      size="sm"
                      variant="contained"
                      onClick={onSubmit}
                    >
                      {t(`action.${confirmMessage}`)}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )
    : null
}

export default Modal
