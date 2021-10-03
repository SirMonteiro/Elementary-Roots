import { Grid, Typography } from '@mui/material'

import Link from 'next/link'

import styles from 'src/styles/components/footer.module.scss'

export function Footer(): JSX.Element {
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
                <Typography>
                  Elementary Roots &copy; {new Date().getFullYear()}
                </Typography>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}
