import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'

import { useTheme } from '@mui/material/styles'

import { NextPage } from 'next'

import styles from 'src/styles/pages/index.module.scss'

import imgCover from 'src/assets/images/cover.jpg'

import { SEO } from 'src/components/SEO'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

const Home: NextPage = () => {
  const theme = useTheme()
  return (
    <main className={styles.main}>
      <SEO title="Elementary Roots" description="The page of Elementary Roots project " />
      <Header />
      <Box height="100vh" width="100%" className={styles.boxImgCover}>
        {/* <img src={imgCover} height="100%" width="100%" /> */}
      </Box>
      <Box>
        <Grid container justifyContent="center" alignItems="center" flexDirection="column" className={styles.gridText}>
          <Typography variant="h4" color="white">The SpaceGreenhouse using engineering origami</Typography>
          <Typography variant="body1" color="white">This is a technological greenhouse made for grow plants for suplementary nutrients in places where resources are scarce</Typography>
          <Typography variant="body1" color="white">The idea for this project was developed during <a href="https://2021.spaceappschallenge.org/">Nasa Space Apps challenge</a>, a Hackathon event made by <a href="https://nasa.gov/">Nasa</a></Typography>
        </Grid>
      </Box>
      <Grid container justifyContent="end" className={styles.imageCredits}>
        <Typography variant="body1" color="white">Credits: <a href="https://images.nasa.gov/details-KSC-20210408-PH-ILW01_0048">NASA/Isaac Watson</a></Typography>
      </Grid>
      <Box className={styles.footer} minWidth="100%">
        <Footer />
      </Box>
    </main >
  )
}

export default Home
