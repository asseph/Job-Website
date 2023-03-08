import type { NextPage } from "next";
import Head from "next/head";
import { ProfileView } from "../views";
import { SideBar } from "../components/SideBar";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Profile: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Realm</title>
        <meta name="description" content="realm" />
      </Head>
      <div className="flex flex-row h-screen w-full">
        <SideBar />

        <ProfileView />
      </div>
    </div>
  );
};

export default Profile;
