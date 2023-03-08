import { FC } from "react";

export const CreateJobView: FC = ({}) => {
  return (
    <div className="w-full  mx-auto p-4 bg-">
      <div className="sm:hero-content mx-auto flex flex-col text-black">
        <h1 className="text-center text-5xl font-bold text-black">
          Make your job listing
        </h1>
        {/* text inputs for title content pay timeline*/}
        <div className="flex flex-col mt-2">
          <label className="text-2xl font-bold text-black">Title</label>
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            placeholder="Title"
          />

          <label className="text-2xl font-bold text-black">Content</label>
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            placeholder="Content"
          />

          <label className="text-2xl font-bold text-black">Pay</label>
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            placeholder="Pay"
          />

          <label className="text-2xl font-bold text-black">Timeline</label>
          <input
            className="border-2 border-black rounded-md p-2"
            type="text"
            placeholder="Timeline"
          />
          <button className="bg-primary rounded-xl py-2 mt-8 text-white ">
            <a href="/profile">Submit</a>
          </button>

        </div>
      </div>
    </div>
  );
};
