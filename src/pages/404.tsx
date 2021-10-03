import { NextPage } from 'next'

import { SEO } from 'src/components/SEO'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import styles from 'src/styles/pages/404.module.scss'

const Demo: NextPage = () => {
  return (
    <main>
      <SEO title="Elementary Roots - 404" description="This page could not be found." />
      <Box height="100vh" width="100%" className={styles.background}></Box>
      <Grid container justifyContent="center" alignItems="center" flexDirection="column" style={{ height: '100vh' }}>
        <Typography variant="h6" color="white">404 | The space object you are looking for has  not be found in Milky Way.</Typography>
      </Grid>
    </main>
  )
}

export default Demo
