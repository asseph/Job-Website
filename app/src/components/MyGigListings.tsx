// component that takes in a job object and returns a ui that displays the job's information

import React from "react";
import { Gig } from "../types/gig";
import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//interface that takes in an array of jobs
interface GigListingProps {
  gigs: Gig[];
}

export const MyGigListings: React.FC<GigListingProps> = ({ gigs }) => {
  //const that displays first 5 and last 5 characters of poster's wallet address

  return (
    <div className="overflow-y-auto h-5/6 rounded-xl ">
      {gigs?.map((gig) => (
        <div className="border border-primary-content text-left max-w-full flex flex-col m-2 bg-primary py-2 px-4 rounded-lg shadow-lg">
          <h1 className="text-2xl text-white font-bold">{gig.title}</h1>

          <p className="text-white">
            Posted by: {gig.posterpubkey.slice(0, 4)}...{" "}
            {gig.posterpubkey.slice(-4)}
          </p>

          <div className=" mb-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-3
          ">
            <p className="text-white text-sm">Budget: {gig.pay}</p>
            <p className="text-white text-sm">Timeline: {gig.timeline}</p>
            <p className="text-white text-sm">Status: {gig.status}</p>
          </div>

          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Edit
              </button>
            </span>
            <span className="ml-3 hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                View
              </button>
            </span>
            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Publish
              </button>
            </span>

            {/* Dropdown */}
            <Menu as="div" className="relative ml-3 sm:hidden">
              <Menu.Button className="inline-flex items-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                More
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 -ml-1 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        View
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      ))}
    </div>
  );
};
