import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { AuthAction, withAuthUser, withAuthUserSSR } from "next-firebase-auth";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>HOME PAGE</h1>
          <Link href="/login">LOGIN</Link>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Home);
