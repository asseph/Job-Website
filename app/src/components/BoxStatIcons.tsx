import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { FC } from "react";
import { UsersIcon } from "@heroicons/react/outline";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { VscBriefcase } from "react-icons/vsc";
import { AiOutlineDollarCircle } from "react-icons/ai";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Bar,
  ComposedChart,
  BarChart
} from "recharts";

const stats = [
  {
    id: 3,
    name: "Business account",
    stat: "$24,098.00",
    icon: AiOutlineDollarCircle,
  },
  {
    id: 1,
    name: "Shared jobs",
    stat: "112X times",
    icon: MdOutlineStickyNote2,
  },
  { id: 2, name: "Job opening", stat: "23X times", icon: VscBriefcase },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Page A",
    pv: 1749,
    amt: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 300,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 2050,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 700,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 2194,
    amt: 2500,
  },
  {
    name: "Page G",
    pv: 1845,
    amt: 2100,
  },
];

const data3 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  }
];

export const BoxStatIcons: FC = ({}) => {
  return (
    <div>
      <dl className="relative absolute bottom-16 mx-5 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-5 text-black">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative  rounded-lg bg-neutral px-4 pt-5 pb-12 border border-gray-300 sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-neutral p-3">
                <item.icon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>

              <p className="ml-16 truncate text-sm font-medium text-black">
                {item.name}
              </p>
            </dt>

            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-xl font-semibold text-black">{item.stat}</p>
            </dd>

            
              <BarChart width={200} height={75} data={data3}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            
          </div>
        ))}

        <div className="col-span-2 relative absolute bottom-10 ">
          <div className="text-lg mb-2 font-bold">Total Contracts Signed</div>

          <div className="grid grid-cols-3 gap-4 border-t pt-2">
            <div className="text-center">
              <p>10.5k</p>
              <p className="text-sm text-gray-400">Total messages sent</p>
            </div>
            <div className="text-center">
              <p>10.5k</p>
              <p className="text-sm text-gray-400">Total messages sent</p>
            </div>
            <div className="text-center">
              <p>10.5k</p>
              <p className="text-sm text-gray-400">Total messages sent</p>
            </div>

            <LineChart width={600} height={100} data={data}>
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#005a64"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
      </dl>
    </div>
  );
};
