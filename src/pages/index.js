import Head from "next/head";
import { WebLayout } from "@/layout";
import HomeSection from "@/sections/home";
import ClickNewSend from "@/sections/clicksendnew";

HomePage.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
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
      {/* <HomeSection /> */}
      <ClickNewSend />
    </>
  );
}
