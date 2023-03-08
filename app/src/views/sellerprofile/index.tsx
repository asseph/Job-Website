import { FC } from "react";
import { useState } from "react";

interface SellerProfileProps {
  pub: String;
}

export const SellerProfileView: FC = ({}) => {
  const [publickey, setPublickey] = useState("");


  function Search ()  {
    
  }

  return (
    <div className="w-full mx-auto p-4 bg-">

      {/* text input that is then used to search for User with that string as its publickey */}
      <div className="flex flex-col">
        <h1 className="my-8 text-center text-5xl font-bold text-black">
          Search for user
        </h1>

        <input type="text" className="rounded-2xl mb-4 text-black w-1/2 mx-auto" />

        <button onClick={Search} className="bg-primary text-2xl rounded-2xl px-4 py-2 mx-auto">Search</button>

      </div>
    </div>
  );
};
