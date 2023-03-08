// Next, React
import { FC, useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createJob, createGig } from "../../graphql/mutations";
import { listGigs, listJobs, listUsers } from "../../graphql/queries";
import { BoxStatIcons } from "../../components/BoxStatIcons";
import { MyJobListing } from "../../components/MyJobListing";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { MyGigListings } from "../../components/MyGigListings";
import {
  LineChart,
  Line,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { GoPrimitiveDot } from "react-icons/go";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";


export const ProfileView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [jobs, setJobs] = useState([]);
  const [gigs, setGigs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
    fetchJobs();
    fetchGigs();
    ListJobs();
    ListGigs();
  }, [wallet, createGig, createJob]);

  //fetch user
  const fetchUser = async () => {
    try {
      console.log("Fetching user");

      // userData listusers with filter of publickey = wallet.publickey tobase58
      const userData = (await API.graphql(
        graphqlOperation(listUsers, {
          filter: { publickey: { eq: wallet.publicKey?.toBase58() } },
        })
      )) as any;

      console.log("User data", userData);

      setUser(userData.data.getUser);
      console.log(userData);
    } catch (err) {
      console.log("error fetching user", err);
    }
  };

  const fetchJobs = async () => {
    try {
      console.log("reaching to the graphql api");

      //const jobdata = listlobs with filter of posterpubkey = wallet.publickey tobase58
      const jobData = (await API.graphql(
        graphqlOperation(listJobs, {
          filter: { posterpubkey: { eq: wallet.publicKey?.toBase58() } },
        })
      )) as any;

      console.log("jobData", jobData);
      const jobs = jobData.data.listJobs.items;
      setJobs(jobs);
    } catch (err) {
      console.log("error fetching jobs", err);
    }
  };

  const fetchGigs = async () => {
    try {
      //const gigdata = listlobs with filter of posterpubkey = wallet.publickey tobase58
      const gigData = (await API.graphql(
        graphqlOperation(listGigs, {
          filter: { posterpubkey: { eq: wallet.publicKey?.toBase58() } },
        })
      )) as any;

      console.log("gigData", gigData);
      const gigs = gigData.data.listGigs.items;
      setGigs(gigs);
    } catch (err) {
      console.log("error fetching gigs");
    }
  };

  async function createNewJob() {
    console.log("Creating new job");

    try {
      const result = await API.graphql(
        graphqlOperation(createJob, {
          input: {
            posterpubkey: wallet.publicKey.toString(),
            title: "Dev work",
            content: "I need work done",
            pay: "22 sol",
            timeline: "1 week",
            status: "ACTIVE",
          },
        })
      );
      console.log("job made: ", result);
    } catch (err) {
      console.log("error creating job:", err);
    }
  }

  async function createNewGig() {
    try {
      const result = await API.graphql(
        graphqlOperation(createGig, {
          input: {
            posterpubkey: wallet.publicKey.toString(),
            title: "Dev work",
            content: "I need work done",
            pay: "22 sol",
            timeline: "1 week",
            status: "ACTIVE",
          },
        })
      );
      console.log("gig created!", result);
    } catch (err) {
      console.log("error creating gig:", err);
    }
  }

  //function that returns ui element for the first job that the user has posted
  const ListJobs = () => {
    if (jobs.length > 0) {
      return <MyJobListing jobs={jobs} />;
    } else {
      return (
        <div className="flex flex-col bg-primary m-2 rounded-lg shadow-lg p-4">
          <h1 className="text-2xl text-black font-bold">No Jobs Posted</h1>
          <p className="text-black">Post a job to get started</p>
        </div>
      );
    }
  };

  const ListGigs = () => {
    if (gigs.length > 0) {
      return <MyGigListings gigs={gigs} />;
    } else {
      return (
        <div className="flex flex-col bg-primary m-2 rounded-lg shadow-lg p-4">
          <h1 className="text-2xl text-black font-bold">No Gigs Posted</h1>
          <p className="text-black">Post a gig to get started</p>
        </div>
      );
    }
  };

  // if user.data.getUser.name is not null then return ui element with it else return ui element with first 5 and last 5 of pubkey
  const GetUserName = () => {
    console.log("getting user name", user);
    if (user?.data.getUser.name != null) {
      return (
        <h1 className="text-3xl font-bold ">Hi {user.data.getUser.name},</h1>
      );
    } else {
      return (
        <h1 className="text-3xl font-bold ">
          Hi {wallet.publicKey?.toBase58().slice(0, 5)}...
          {wallet.publicKey?.toBase58().slice(-5)} ,
        </h1>
      );
    }
  };

  // if user.data.getUser.bio is not null then return ui element with it else return nothing
  const GetUserBio = () => {
    if (user?.data.getUser.bio != null) {
      return <p className="text-lg ">{user.data.getUser.bio}</p>;
    } else {
      return <p className="text-3xl font-bold ">Ready to network </p>;
    }
  };

  const activityItems = [
    {
      id: 1,
      person: "Easy Eats",
      profilepic:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      occupation: "Rust Developer",
      lookingfor: "is looking for an artist",
      time: "1h",
    },
    {
      id: 1,
      person: "Tom",
      profilepic:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      occupation: "UX Designer",
      lookingfor: "is looking for a developer",
      time: "1h",
    },
    {
      id: 1,
      person: "Jhon Green",
      profilepic:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      occupation: "UI Designer",
      lookingfor: "is looking for an artist",
      time: "1h",
    },
  ];

  const profilepic =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80";

  const data1 = [
    {
      name: "Page A",
      SOL: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      SOL: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      SOL: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      SOL: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      SOL: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      SOL: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      SOL: 4300,
      amt: 2100,
    },
  ];

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
  ];
  const COLORS = ["#e3fe54", "#2f838f"];
  const COLORSSMALL = ["#cded2d", "#2f838f"];

  const data3 = [
    {
      name: "Feed",

      pv: 800,
      amt: 1400,
    },
    {
      name: "Goat",

      pv: 967,
      amt: 1506,
    },
    {
      name: "mustang",

      pv: 1098,
      amt: 989,
    },
    {
      name: "Andreas",

      pv: 1098,
      amt: 989,
    },
  ];

  return (
    <div className=" w-full px-4 mt-7">
      {wallet.publicKey !== null ? (
        <div className="h-full">
          <div className="grid grid-cols-5">
            <div className="col-span-3 text-left font-bold text-white bg-primary rounded-2xl p-4 pb-24 ">
              <div className="flex flex-column ">
                {/*<img src={"default.jpg"} className="rounded-full h-16 w-16 mr-10" />*/}

                <GetUserName />
              </div>

              <div className="flex flex-column">
                <p className="text-5xl font-bold ">
                  Ready to network &#128075;{" "}
                </p>

                <button className=" text-black ml-20 bg-primary-focus text-md rounded-xl px-6  ">
                  <a href="createjob">
                  POST JOB HERE
                  </a>
                </button>
              </div>
            </div>

            <div className="col-start-5 col-span-1 flex flex-row align-right gap-3 text-black">
              <BsSearch className="h-8 w-8 text-black rounded-full shadow p-1" />
              <FaRegBell className="h-8 w-8 text-black rounded-full shadow p-1" />
              <div className="flex flex-row gap-5 shadow h-10 p-2 rounded-xl ">
                <img className="h-6 w-6 rounded-full" src={profilepic} alt="" />
                <p>Feed</p>
                <AiOutlineDown/>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <BoxStatIcons />
          </div>

          <div className="relative absolute bottom-16 grid grid-cols-7 gap-10">
            <div className="col-span-4 border">
              <p className="text-black">Money Flow</p>

              <LineChart width={925} height={190} data={data1}>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="SOL"
                  stroke="#005a64"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>

            <div className="col-span-3 ">
              <div className="grid grid-cols-2 ">
                <div>
                  <p className="text-black ">Profile views</p>
                  <p className="text-black text-sm text-gray-400 mb-2">
                    Users that view your profile
                  </p>
                  <PieChart width={175} height={160}>
                    <Pie
                      data={data}
                      cx={75}
                      cy={75}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </div>

                <div className="text-black">
                  <p className="ml-5 flex flex-row">
                    <GoPrimitiveDot className="text-secondary" />
                    New views{" "}
                  </p>
                  <p className="ml-5 flex flex-row">
                    <GoPrimitiveDot className="text-accent" />
                    More than 1 click
                  </p>
                  <div className="flex flex-row mt-2">
                    <PieChart width={60} height={60}>
                      <Pie
                        data={data}
                        cx={25}
                        cy={25}
                        innerRadius={10}
                        outerRadius={25}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORSSMALL[index % COLORSSMALL.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                    <div className="mt-2">
                      <p>+18%</p>
                      <p className="text-gray-500 text-sm">1.123 new views</p>
                    </div>
                  </div>
                  <div className="flex flex-row mt-2">
                    <PieChart width={60} height={60}>
                      <Pie
                        data={data}
                        cx={25}
                        cy={25}
                        innerRadius={10}
                        outerRadius={25}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORSSMALL[index % COLORSSMALL.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                    <div className="mt-2">
                      <p>+14%</p>
                      <p className="text-gray-500 text-sm">
                        187 persons clicked!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-1/4 text-black w-full grid grid-cols-4 gap-20 ml-5">
            <div className="col-span-2">
              <h2>Activity Feed</h2>
              <div>
                <ul role="list" className="divide-y divide-gray-200">
                  {activityItems.map((activityItem) => (
                    <li key={activityItem.id} className="py-4">
                      <div className="flex space-x-3 border-l-4 border-primary rounded pl-2">
                        <img
                          className="h-6 w-6 rounded-full"
                          src={activityItem.profilepic}
                          alt=""
                        />

                        <div className="flex-1 space-y-1 ">
                          <div className="flex items-center justify-between ">
                            <div className="grid grid-cols-4">
                              <h3 className="text-sm font-medium col-span-2">
                                {activityItem.person}
                              </h3>

                              <p className="text-sm text-black col-span-2">
                                {activityItem.lookingfor}
                              </p>
                            </div>

                            <p className="text-sm text-gray-500">
                              {activityItem.time}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {activityItem.occupation}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-2 ">
              <h2 className="font-bold">
                People who clicked the most on your Profile
              </h2>

              <div className="flex flex-row gap-20 mt-2">
                <p>
                  Current Rate <span className="text-blue-700">4.3%</span>{" "}
                </p>
                <p>
                  Target Rate <span className="text-blue-700">8%</span>
                </p>
              </div>

              <ComposedChart
                layout="vertical"
                width={500}
                height={200}
                data={data3}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />

                <Bar dataKey="pv" barSize={20} fill="#005a64" />
              </ComposedChart>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-5xl text-center text-black mt-20">
          Connect wallet to login...
        </p>
      )}
    </div>
  );
};
