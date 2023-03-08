import { FC } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { TiFlowSwitch } from "react-icons/ti";
import { RiBarChartBoxLine } from "react-icons/ri";

const navigation = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    href: "/profile",
    count: 0,
    current: false,
  },
  {
    name: "Messages",
    icon: MdOutlineMessage,
    href: "/inbox",
    count: 5,
    current: true,
  },
  {
    name: "My Wallets",
    icon: CalendarIcon,
    href: "/tasks",
    count: 0,
    current: false,
  },
  {
    name: "Activity",
    icon: TiFlowSwitch,
    href: "/reviews",
    count: 0,
    current: false,
  },
  {
    name: "Post jobs",
    icon: RiBarChartBoxLine,
    href: "/sellerprofile",
    count: 0,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const SideBar: FC = ({}) => {
  return (
    <div className="pl-5 p-1 w-60 flex min-h-0 flex-col bg-neutral-focus font-custom1">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 mb-6">
        <div className="border-b pb-8 mt-2">
          <Link href="/">
            <a>
              <div className="flex flex-shrink-0 items-center ">
                <img className="h-9 w-auto ml-1" src="./dark-logo.png" alt="" />
                <p className="ml-2.5 mt-2 text-xl font-bold text-primary">
                  realm
                </p>
              </div>
            </a>
          </Link>
        </div>

        <nav className=" mt-8 flex-1 space-y-2 mr-4 " aria-label="Sidebar">
          <Link href={navigation[0].href}>
            <a
              key={navigation[0].name}
              className={classNames(
                navigation[0].current
                  ? "text-white bg-primary hover:bg-opacity-75 shadow-lg pl-5"
                  : " shadow-0 bg-neutral-focus text-gray-500 hover:bg-opacity-75 pl-5",
                "group flex navigation[0]s-center px-2 py-2 text-sm font-medium rounded-lg "
              )}
            >
              <img src="./home-2.png" className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5"/>

              <span className="flex-1 my-1 text-xs ">{navigation[0].name}</span>
              {navigation[0].count ? (
                <span
                  className={classNames(
                    navigation[0].current
                      ? "bg-primary-focus"
                      : "bg-primary-focus",
                    "text-black inline-block px-2  text-[10px] font-medium rounded-full"
                  )}
                >
                  {navigation[0].count}
                </span>
              ) : null}
            </a>
          </Link>

          <Link href={navigation[1].href}>
            <a
              key={navigation[1].name}
              className={classNames(
                navigation[1].current
                  ? "text-white bg-primary hover:bg-opacity-75 shadow-lg pl-5"
                  : " shadow-0 bg-neutral-focus text-gray-500 hover:bg-opacity-75 pl-5",
                "group flex navigation[1]s-center px-2 py-2 text-sm font-medium rounded-lg "
              )}
            >
              <img src="./message.png" className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5"/>

              <span className="flex-1 my-1 text-xs ">{navigation[1].name}</span>
              {navigation[1].count ? (
                <span
                  className={classNames(
                    navigation[1].current
                      ? "bg-primary-focus"
                      : "bg-primary-focus",
                    "text-black inline-block px-2  text-[10px] font-medium rounded-full"
                  )}
                >
                  {navigation[1].count}
                </span>
              ) : null}
            </a>
          </Link>

          <Link href={navigation[2].href}>
            <a
              key={navigation[2].name}

              className={classNames(
                navigation[2].current
                  ? "text-white bg-primary hover:bg-opacity-75 shadow-lg pl-5"
                  : " shadow-0 bg-neutral-focus text-gray-500 hover:bg-opacity-75 pl-5",
                "group flex navigation[2]s-center px-2 py-2 text-sm font-medium rounded-lg "
              )}
              
            >
              <img src="./card.png" className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5"/>

              <span className="flex-1 my-1 text-xs ">{navigation[2].name}</span>
              {navigation[2].count ? (
                <span
                  className={classNames(
                    navigation[2].current
                      ? "bg-primary-focus"
                      : "bg-primary-focus",
                    "text-black inline-block px-2  text-[10px] font-medium rounded-full"
                  )}
                >
                  {navigation[2].count}
                </span>
              ) : null}
            </a>
          </Link>

          <Link href={navigation[3].href}>
            <a
              key={navigation[3].name}
              className={classNames(
                navigation[3].current
                  ? "text-white bg-primary hover:bg-opacity-75 shadow-lg pl-5"
                  : " shadow-0 bg-neutral-focus text-gray-500 hover:bg-opacity-75 pl-5",
                "group flex navigation[3]s-center px-2 py-2 text-sm font-medium rounded-lg "
              )}
            >
              <img src="./group.png" className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5"/>

              <span className="flex-1 my-1 text-xs ">{navigation[3].name}</span>
              {navigation[3].count ? (
                <span
                  className={classNames(
                    navigation[3].current
                      ? "bg-primary-focus"
                      : "bg-primary-focus",
                    "text-black inline-block px-2  text-[10px] font-medium rounded-full"
                  )}
                >
                  {navigation[3].count}
                </span>
              ) : null}
            </a>
          </Link>

          <Link href={navigation[4].href}>
            <a
              key={navigation[4].name}
              className={classNames(
                navigation[4].current
                  ? "text-white bg-primary hover:bg-opacity-75 shadow-lg pl-5"
                  : " shadow-0 bg-neutral-focus text-gray-500 hover:bg-opacity-75 pl-5",
                "group flex navigation[4]s-center px-2 py-2 text-sm font-medium rounded-lg "
              )}
            >
              <img src="./Chart.png" className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5"/>

              <span className="flex-1 my-1 text-xs ">{navigation[4].name}</span>
              {navigation[4].count ? (
                <span
                  className={classNames(
                    navigation[4].current
                      ? "bg-primary-focus"
                      : "bg-primary-focus",
                    "text-black inline-block px-2  text-[10px] font-medium rounded-full"
                  )}
                >
                  {navigation[4].count}
                </span>
              ) : null}
            </a>
          </Link>

          <div className="  pt-10 rounded-lg ">
            <WalletMultiButton className="bg-primary rounded-lg " />
          </div>

          <div className="absolute bottom-12 gap-7 flex flex-col text-gray-500 text-sm ml-5">
            <a href="" className=" font-medium ">
              <span className="flex flex-row">
                {" "}
                <AiOutlineQuestionCircle className="text-lg mr-3 mt-.5" /> Get
                Help
              </span>
            </a>
            <a href="" className=" font-medium ">
              <span className="flex flex-row ">
                {" "}
                <FiSettings className="text-lg mr-3 mt-0.5" /> Settings
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
