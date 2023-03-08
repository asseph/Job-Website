import type { NextPage } from "next";
import Head from "next/head";
import { ReviewView } from "../views";
import { SideBar } from "../components/SideBar";

const Review: NextPage = (props) => {
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
        <ReviewView  />
      </div>
    </div>
  );
};

export default Review;
