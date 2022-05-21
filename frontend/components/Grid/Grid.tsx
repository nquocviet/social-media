import React, { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Grid.module.css'

type GridAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

type GridJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type TGridProps = {
  children: ReactNode
  align?: GridAlignment
  justify?: GridJustify
  row?: boolean
  column?: boolean
  spacer?: number
  expanded?: boolean
  className?: string
  xl?: GridSizes
  lg?: GridSizes
  md?: GridSizes
  sm?: GridSizes
  xs?: GridSizes
}

const Grid = ({
  children,
  align,
  justify,
  row,
  column,
  spacer = 16,
  expanded,
  className,
  xl,
  lg,
  md,
  sm,
  xs,
}: TGridProps) => {
  const isRow: boolean = row || !column

  const allClassNames: string = clsx(
    !isRow ? styles.column : styles.row,
    isRow && expanded ? ` ${styles.expanded}` : '',
    isRow && justify ? ` ${styles[justify]}` : '',
    isRow && align ? ` ${styles['align-' + align]}` : '',
    !isRow && xs ? ` ${styles['xs-' + xs]}` : '',
    !isRow && sm ? ` ${styles['sm-' + sm]}` : '',
    !isRow && md ? ` ${styles['md-' + md]}` : '',
    !isRow && lg ? ` ${styles['lg-' + lg]}` : '',
    !isRow && xl ? ` ${styles['xl-' + xl]}` : '',
    className
  )

  return (
    <div
      className={allClassNames}
      style={{
        ...(isRow && {
          ['--grid-spacer' as any]: `${spacer / 2}px`,
        }),
      }}
    >
      {children}
    </div>
  )
}

export default Grid
