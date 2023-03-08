import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import { SideBar } from "../components/SideBar";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Realm</title>
        <meta
          name="Realm"
          content="web3 job platform"
        />
      </Head>
      <div className="flex flex-row h-screen w-full">
        <SideBar />
        <HomeView  />
      </div>
    </div>
  );
};

export default Home;
