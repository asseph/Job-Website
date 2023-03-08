import { FC } from "react";
import Link from "next/link";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import { CgProfile } from "react-icons/cg";
import NetworkSwitcher from "./NetworkSwitcher";

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (

    <div>
      
      {/* NavBar / Header */}
      <div className="navbar flex flex-row  shadow-lg bg-secondary text-neutral-content">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              className="inline-block w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>

          <img className="ml-4 h-8 w-8" src="./realm_logo_fit_nobg.png"></img>

          <h1 className="text-3xl font-bold ml-4  ">
            realm
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:inline md:navbar-center">
          <div className="flex items-stretch">
            <Link href="/">
              <a className=" btn btn-ghost btn-sm rounded-btn">Home</a>
            </Link>
            <Link href="/jobs">
              <a className="btn btn-ghost btn-sm rounded-btn">jobs</a>
            </Link>
            <Link href="/inbox">
              <a className="btn btn-ghost btn-sm rounded-btn">inbox</a>
            </Link>
            <Link href="/reviews">
              <a className="btn btn-ghost btn-sm rounded-btn">reviews</a>
            </Link>
            <Link href="/tasks">
              <a className="btn btn-ghost btn-sm rounded-btn">tasks</a>
            </Link>
            <Link href="/timeline">
              <a className="btn btn-ghost btn-sm rounded-btn">timeline</a>
            </Link>
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <WalletMultiButton className="btn btn-ghost mr-4" />

          <Link href="/profile">
            <a className="btn btn-ghost rounded-full ">
              <CgProfile className="  text-3xl  " />
            </a>
          </Link>
        </div>
      </div>
      {props.children}
    </div>
  );
};
