import Image from "next/image";
import Typography from "@mui/material/Typography";
import { FC, Fragment, ReactNode } from "react";
import styles from "../styles/Home.module.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
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
