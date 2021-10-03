import Link, { LinkProps } from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import Button from '@mui/material/Button'

import { useTheme } from '@mui/material/styles'

import styles from '../styles/components/linkbutton.module.scss'

type LinkButtonProps = PropsWithChildren<
  LinkProps & {
    children: ReactNode
  }
>

export function LinkButton({
  href,
  children,
  ...props
}: LinkButtonProps): JSX.Element {
  const theme = useTheme()
  return (
    <Link href={href}>
      <a
        className={styles.a}
        {...props}
        style={{ color: theme.palette.text.primary }}
      >
        <Button color="inherit">{children}</Button>
      </a>
    </Link>
  )
}
