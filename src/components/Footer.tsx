import { Grid, Typography } from '@mui/material'

import Link from 'next/link'

import styles from 'src/styles/components/footer.module.scss'

type footerColor = {
  color?: string
}

export function Footer(color: footerColor): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <Grid container alignItems="center">
            <Link href="/">
              <a>
                <Typography color={color}>
                  Elementary Roots &copy; 2021
                </Typography>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}
