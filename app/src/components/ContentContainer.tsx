import { FC } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
export const ContentContainer: FC = (props) => {
  return (
    <div className="flex-1 drawer h-52">
      {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">{props.children}</div>

      {/* SideBar / Drawer */}
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-40 bg-primary-focus">
          <li>
            <Link href="/">
              <a className="  ">
                <CgProfile className="  text-4xl  " />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <a>Jobs</a>
            </Link>
          </li>
          <li>
            <Link href="/inbox">
              <a>inbox</a>
            </Link>
          </li>
          <li>
            <Link href="/reviews">
              <a>reviews</a>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <a>tasks</a>
            </Link>
          </li>
          <li>
            <Link href="/timeline">
              <a>timeline</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
