import { FC } from "react";
import { useEffect, useState } from "react";
import { JobCard } from "../../components/JobCard";
import { AiOutlineSearch } from "react-icons/ai";
import { Job } from "../../types/job";
import { AllJobListings } from "components/AllJobListings";
import { API, graphqlOperation } from "aws-amplify";
import { listJobs } from "../../graphql/queries";
import { ListJobsQuery } from "../../API";
import InfiniteScroll from "react-infinite-scroll-component";




export const JobsView: FC = ({}) => {
  const [jobs, setJobs] = useState([]);
  const [gigs, setGigs] = useState([]);



  const ListJobs = () => {
    if (jobs.length > 0) {
      return <AllJobListings jobs={jobs} />;
    } else {
      return (
        <div className="flex flex-col bg-primary m-2 rounded-lg shadow-lg p-4">
          <h1 className="text-2xl text-white font-bold">No Jobs Posted</h1>
          <p className="text-white">Post a job to get started</p>
        </div>
      );
    }
  };

  useEffect(() => {

    fetchJobs();

  }, []);


  const fetchJobs = async () => {
      try {
        console.log("reaching to the graphql api");
  
        const jobData = (await API.graphql(graphqlOperation(listJobs))) as any;
        console.log("jobData", jobData);
        const jobs = jobData.data.listJobs.items;
        setJobs(jobs);
      } catch (err) {
        console.log("error fetching jobs");
      }
    };



  return (
    <div className="w-full mx-auto p-4 mt-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mx-10 mb-10">
          <h1 className="text-center text-4xl font-bold text-black">
            Job Listings
          </h1>

          <div className="flex flex-row justify-between">
            <input
              className="w-96 h-10 pl-2 rounded-2xl border-2 border-black text-black"
              placeholder="Search for jobs"
            />
            <button className="w-10 h-10 rounded-2xl bg-black">
              <AiOutlineSearch className="text-3xl ml-1" />
            </button>
          </div>
        </div>

        <div>
          <ListJobs />
        </div>

      </div>
    </div>
  );
};
