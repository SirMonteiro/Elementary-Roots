import { NextPage } from 'next'

import { SEO } from 'src/components/SEO'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

import Box from '@mui/material/Box'

import styles from 'src/styles/pages/video.module.scss'

const Video: NextPage = () => {
  return (
    <main>
      <SEO title="Elementary Roots - Project Video" description="Project Video of Nasa Space Apps Challenge" />
      <Header />
      <Box mt="54px" className={styles.videoBox}>
        <iframe src="https://www.youtube-nocookie.com/embed/Z1xhLvmFng4?modestbranding=1&rel=0&cc_load_policy=0&fs=0&showinfo=0" width="100%" height="100%" frameBorder="0" />
      </Box>
      <Footer />
    </main>
  )
}

export default Video
