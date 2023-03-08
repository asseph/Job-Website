import { FC } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { createUser } from "../../graphql/mutations";
import { getUser } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { updateUser } from "../../graphql/mutations";

export const EditProfileView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [wallet]);

  //fetch user
  const fetchUser = async () => {
    try {
      const userData = (await API.graphql(
        graphqlOperation(getUser, { id: wallet.publicKey?.toBase58() })
      )) as any;
      setUser(userData.data.getUser);
      console.log(userData);
    } catch (err) {
      console.log("error fetching user", err);
    }
  };

  async function createNewUser() {

    if(user) {
        console.log("User already exists");
        return;
    }


    console.log("Creating new user");
    const newUser = {
      publickey: wallet.publicKey?.toBase58(),
      name: "New User",
      bio: "New User Bio",
    };
    try {
      const userData = (await API.graphql(
        graphqlOperation(createUser, { input: {
            publickey: wallet.publicKey.toString(),
            name: "Gavin",
            bio: "im a dev"
        }})
      )) as any;
      console.log(userData);
    } catch (err) {
      console.log("error creating user", err);
    }
  }

  async function updateUser() {
    console.log("Updating user");

    //check for user
    if (!user) {
        console.log("No user found, creating new user");
        
        createNewUser();
    }

    const updatedUser = {
      id: wallet.publicKey?.toBase58(),
      name: "Updated User",
      bio: "Updated User Bio",
    };
    try {
      const userData = (await API.graphql(
        graphqlOperation(updateUser, { input: updatedUser })
      )) as any;
      console.log(userData);
    } catch (err) {
      console.log("error updating user", err);
    }
  }

  return (
    <div className="w-full  mx-auto p-4 bg-">
      <div className=" flex flex-col">
        {/* 2 text inputs that update user name and bio */}
        <h1 className="my-8 text-center text-5xl font-bold text-black">
          Edit profile
        </h1>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl font-bold text-black">Name</h1>
            <input
              className="text-black border-2 border-black rounded-md p-2"
              type="text"
              placeholder="Name"
            />

            <h1 className="text-center text-3xl font-bold text-black">Bio</h1>
            <input
              className="text-black border-2 border-black rounded-md p-2"
              type="text"
              placeholder="Bio"
            />

            <Button className="mt-4 px-4 py-2 bg-primary rounded-2xl " onClick={updateUser}>
              Update
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};
