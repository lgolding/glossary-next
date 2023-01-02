import Image from "next/image";
import Link from "next/link";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { FC, Fragment, ReactNode } from "react";
import styles from "../styles/Home.module.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              title="Home"
              sx={{ mr: 2 }}
            >
              <Home />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Glossary
          </Typography>
        </Toolbar>
      </AppBar>
      {children}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="body1">Powered by </Typography>

          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Fragment>
  );
};

export default Layout;
