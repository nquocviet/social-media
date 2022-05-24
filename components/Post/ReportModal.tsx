import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { Modal } from '../Modal'
import { Radio } from '../Radio'

type TReportModalProps = {
  open: boolean
  title: string
  onClose: () => void
}

const issues = [
  {
    label: 'it_spam',
    value: 0,
  },
  {
    label: 'nudity_sexual',
    value: 1,
  },
  {
    label: 'false_information',
    value: 2,
  },
  {
    label: 'hateful_speech',
    value: 3,
  },
  {
    label: 'abusive',
    value: 4,
  },
  {
    label: 'sale_of_illegal',
    value: 5,
  },
  {
    label: 'intellectual_property',
    value: 6,
  },
  {
    label: 'violence',
    value: 7,
  },
  {
    label: 'not_interest',
    value: 8,
  },
]

const ReportModal = ({ open, title, onClose }: TReportModalProps) => {
  const [issue, setIssue] = useState(issues[0].value)
  const { t } = useTranslation('common')

  return (
    <Modal
      open={open}
      title={title}
      confirmMessage="submit"
      onClose={onClose}
      onSubmit={() => null}
    >
      {issues.map(({ label, value }) => (
        <Radio
          key={value}
          label={t(`issues.${label}`)}
          value={value}
          size={12}
          name="issues"
          containerClassName="font-semibold mb-2.5 last:mb-0"
          checked={issue === value}
          onChange={() => setIssue(value)}
        />
      ))}
    </Modal>
  )
}

export default ReportModal
