import { useState } from 'react'

import Button from '@mui/material/Button'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Grid,
  Box,
  Typography
} from '@mui/material'
import Link from 'next/link'

import styles from 'src/styles/components/header.module.scss'

import elementaryRootsLogo from 'src/assets/images/logotipo.png'

import { LinkButton } from 'src/components/LinkButton'

import CloseIcon from '@mui/icons-material/Close';

export function Header(): JSX.Element {
  const [isDrawerOpen, setisDrawerOpen] = useState(false)

  function handleDrawerOpen() {
    setisDrawerOpen(true)
  }

  function handleDrawerClose() {
    setisDrawerOpen(false)
  }

  const drawerNavItems = [
    { href: '/contact', primary: 'Contact' },
    { href: '/video', primary: 'Video' },
    { href: '/demo', primary: 'Demo' }
  ]

  return (
    <header className={styles.header}>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/" passHref>
          <a aria-label="Página inicial" style={{ textDecoration: "none", color: 'initial' }}>
            <Grid container justifyContent="center" alignItems="center" flexDirection="row">
              <img src={elementaryRootsLogo} alt="Elementary Roots" width="32px" height="32px" />
              <Typography variant="subtitle1">Elementary Roots</Typography>
            </Grid>
          </a>
        </Link>

        <Hidden smDown>
          <div>
            {drawerNavItems.map((item, index) => (
              <LinkButton href={item.href} key={index}>
                {item.primary}
              </LinkButton>
            ))}
          </div>
        </Hidden>

        <Hidden smUp>
          <Button onClick={handleDrawerOpen} color="inherit">
            Menu
          </Button>
        </Hidden>
      </Grid>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Box width="45vh">
          <div className={styles.divModalActions}>
            <button onClick={handleDrawerClose}>
              <CloseIcon />
            </button>
          </div>

          <List component="nav">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Hidden smUp>
                {drawerNavItems.map((item, index) => (
                  <Grid item xs={10} key={index}>
                    <Link href={item.href} passHref>
                      <ListItem button component="a">
                        <ListItemText primary={item.primary} />
                      </ListItem>
                    </Link>
                  </Grid>
                ))}
              </Hidden>
            </Grid>
          </List>
        </Box>
      </Drawer>
    </header>
  )
}
