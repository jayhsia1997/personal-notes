import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.description}>
          Welcome to my personal notes website!
          <br />
          Here, I share my learning journey and notes on various topics.
          <br />
          Feel free to explore and know more about me with the link below.
        </p>
        <div className={styles.buttons}>
          <a className="button button--primary button--lg" href="https://jayhsia.com">
            Explore My Website
          </a>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/notes">
            View My Notes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
