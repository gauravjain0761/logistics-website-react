import Head from "next/head";
import PrimaryHomePage from "@/sections/primaryhomepage";
import { PrimaryWebLayout } from "@/layout";

HomePage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryHomePage />
    </>
  );
}
