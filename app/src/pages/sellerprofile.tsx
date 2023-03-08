import type { NextPage } from "next";
import Head from "next/head";
import { SellerProfileView } from "../views";
import { SideBar } from "../components/SideBar";

const SellerProfile: NextPage = (props) => {
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
        <SellerProfileView  />
      </div>
    </div>
  );
};

export default SellerProfile;
