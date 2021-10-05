// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextPage } from 'next'

import { SEO } from 'src/components/SEO'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

import Box from '@mui/material/Box'

import styles from 'src/styles/pages/3d.module.scss'

import Head from 'next/head'

const Demo: NextPage = () => {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Head>
      <main>
        <SEO
          title="Elementary Roots - Project Demo"
          description="Project Demo of Nasa Space Apps Challenge"
        />
        <Header />
        <Box mt="54px" className={styles.boxModel}>
          <model-viewer
            src="/assets/models/elementaryRootsProject.glb"
            alt="A 3D model of the "
            ar
            ar-modes="webxr scene-viewer quick-look"
            environment-image="neutral"
            auto-rotate
            camera-controls
          >
            <button
              className={styles.Hotspot}
              slot="hotspot-2"
              data-position="-44.76127527761178m 11.713999748229982m -11.608825322995974m"
              data-normal="0m 1m 2.220446049250313e-16m"
              data-visibility-attribute="visible"
            >
              <div className={styles.HotspotAnnotation}>
                Three Module (compacted)
              </div>
            </button>
            <button
              className={styles.Hotspot}
              slot="hotspot-4"
              data-position="-1.2610564892861191m 28.000000000000004m -13.29383640189836m"
              data-normal="0m 1m 2.220446049250313e-16m"
              data-visibility-attribute="visible"
            >
              <div className={styles.HotspotAnnotation}>
                Two Module (opened)
              </div>
            </button>
            <button
              className={styles.Hotspot}
              slot="hotspot-6"
              data-position="40.130591005315544m 12.077562203552805m -13.648259535242627m"
              data-normal="-0.008705371289096169m 0.9999621059548204m 0.00005625939531047346m"
              data-visibility-attribute="visible"
            >
              <div className={styles.HotspotAnnotation}>
                Single Module (opened)
              </div>
            </button>
          </model-viewer>
        </Box>
        <Footer />
      </main>
    </>
  )
}

export default Demo
