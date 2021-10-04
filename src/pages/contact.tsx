import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { NextPage } from 'next'

import { SEO } from 'src/components/SEO'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

import Link from 'next/link'

const Contact: NextPage = () => {
  return (
    <>
      <SEO
        title="Elementary Roots - Contact"
        description="Answer our survey!"
      />
      <Header />
      <main>
        <Box mt="54px">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Grid item>
              <Typography variant="h2">Contact</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">If you are an scientist or a engineer, help us know if our project is possible.</Typography>
            </Grid>
            <Box width="100%">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfIfUjssxFKstSbvC2wl_6kK0fXXnyFx-uc0uUYzlXRX-kj7A/viewform?embedded=true" width="100%" height="1344px" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…, wait a second!</iframe>
            </Box>
            <Button variant="contained">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIfUjssxFKstSbvC2wl_6kK0fXXnyFx-uc0uUYzlXRX-kj7A/viewanalytics" passHref><a style={{ textDecoration: 'none', color: '#FFF' }} target="_blank" rel="noopener">Show results</a></Link>
            </Button>
          </Grid>
        </Box>
      </main>
      <Footer />
    </>
  )
}

export default Contact
