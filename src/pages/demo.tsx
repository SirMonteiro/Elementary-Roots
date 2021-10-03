// @ts-nocheck
import { NextPage } from 'next'

import { SEO } from 'src/components/SEO'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

import Box from '@mui/material/Box'

import styles from 'src/styles/pages/demo.module.scss'

import Head from 'next/head'

const Demo: NextPage = () => {
  return (
    <>
      <Head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
      </Head>
      <main>
        <SEO title="Elementary Roots - Project Demo" description="Project Demo of Nasa Space Apps Challenge" />
        <Header />
        <Box mt="54px" className={styles.boxModel}>
          <model-viewer
            src="/assets/models/Astronaut.glb"
            alt="A 3D model of the "
            ar
            ar-modes="webxr scene-viewer quick-look"
            environment-image="neutral"
            auto-rotate
            camera-controls />
        </Box>
        <Footer />
      </main>
    </>
  )
}

export default Demo
