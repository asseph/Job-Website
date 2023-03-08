import type { NextPage } from "next";
import Head from "next/head";
import { JobsView } from "../views";
import { SideBar } from "../components/SideBar";

const Jobs: NextPage = (props) => {
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
        <JobsView  />
      </div>
    </div>
  );
};

export default Jobs;
