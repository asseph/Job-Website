import type { NextPage } from "next";
import Head from "next/head";
import { InboxView } from "../views";
import { SideBar } from "../components/SideBar";

const Inbox: NextPage = (props) => {
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
        <InboxView  />
      </div>
    </div>
  );
};

export default Inbox;
