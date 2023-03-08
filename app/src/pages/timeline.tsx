import type { NextPage } from "next";
import Head from "next/head";
import { TimelineView } from "../views";
import { SideBar } from "../components/SideBar";

const TimeLine: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Realm</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <div className="flex flex-row h-screen w-full">
        <SideBar />
        <TimelineView  />
      </div>
    </div>
  );
};

export default TimeLine;