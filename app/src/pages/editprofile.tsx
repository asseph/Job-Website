import type { NextPage } from "next";
import Head from "next/head";
import { EditProfileView } from "../views";
import { SideBar } from "../components/SideBar";

const EditProfile: NextPage = (props) => {
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
        <EditProfileView  />
      </div>
    </div>
  );
};

export default EditProfile;