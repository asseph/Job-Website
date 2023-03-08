import type { NextPage } from "next";
import Head from "next/head";
import { TaskView } from "../views";
import { SideBar } from "../components/SideBar";

const Tasks: NextPage = (props) => {
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
        <TaskView  />
      </div>
    </div>
  );
};

export default Tasks;