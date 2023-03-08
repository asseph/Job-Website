import { FC } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import Link from "next/link";


import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export const HomeView: FC = ({}) => {


  return (
    <div className="w-full md:hero mx-auto ">
      
      <div className="md:hero-content flex flex-col">
        <div className="relative overflow-hidden s">
          <div className="relative   ">
            <img
              className="rounded-3xl shadow w-3/4 mx-auto my-4"
              src="./Realm_banner.png"
            />

            <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 mb-8 p-5 ">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The Web3 hub for your</span>{" "}
                  <span className="block text-primary-focus xl:inline">
                    Web3 buisness
                  </span>
                </h1>

                <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Link href="/profile">
                      <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary px-8 py-3 text-base font-medium text-white hover:bg-secondary-focus md:py-4 md:px-10 md:text-lg">
                        Get started
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <Link href="/jobs">
                      <a className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-secondary hover:bg-secondary-content md:py-4 md:px-10 md:text-lg">
                        Browse Jobs
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
