import { FC } from "react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createPrivMessage } from "../../graphql/mutations";
import { listPrivMessages } from "../../graphql/queries";
import { WalletAccountError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//function that creates a new privMessage

const profilepic =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80";

const messages = [
  {
    name: "Tom Callahan",
    time: "4:32",
    message: "We almost done with brief!",
    image:
      "https://www.arweave.net/VrpWAZSnmT9X4IKxR9FFAGGuK6IHJLdgRw-PyJ4lAIM?ext=png",
    active: false,
  },
  {
    name: "Franklin Doves",
    time: "4:32",
    message: "Hi? I have some sent money tod...",
    image: "https://metadata.degods.com/g/4900-dead.png",
    active: false,
  },
  {
    name: "Lea Elhon",
    time: "4:31",
    message: "I will immediately pay accordin...",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    active: true,
  },
  {
    name: "James Dean",
    time: "4:34",
    message: "I hope you will be fine without",
    image:
      "https://arweave.net/WUCWN3_C9hDHtewevTpSJe4FGUHJbzEHTPjRjyQA11s?ext=png",
    active: false,
  },
  {
    name: "James Dean",
    time: "4:28",
    message: "You are great alesia! make that ",
    image:
      "https://bafybeihg4mg4265jbgb77izpufexe5ei2lw3rndbjy536pqmsue6ufdtyq.ipfs.nftstorage.link/9894.png?ext=png",
    active: false,
  },
  {
    name: "Alex Humpfrey",
    time: "4:28",
    message: "You are great alesia! make that ",
    image:
      "https://bafybeihg4mg4265jbgb77izpufexe5ei2lw3rndbjy536pqmsue6ufdtyq.ipfs.nftstorage.link/9894.png?ext=png",
    active: false,
  },
];

const activeMessages = [
  {
    name: "Leslie Alexander",
    from: "other",
    time: "4:32 PM",
    message:
      "Hey there, let me know when youll be avalible to talk about our futre collaberation id like to present you my buisness partner btw",
  },
  {
    name: "Leslie Alexander",
    from: "me",
    time: "4:32 PM",
    message: "Yeah sounds good! id be down to meet them too",
  },
  {
    name: "Leslie Alexander",
    from: "other",
    time: "4:32 PM",
    message: "Ok so implanning the call for tmrw then",
  },
  {
    name: "Leslie Alexander",
    from: "me",
    time: "4:32 PM",
    message:
      "Just a last thing. do you think that we will have the time to talk about the new pages that needs to be made?",
  },
];

export const InboxView: FC = ({}) => {
  const [privMessages, setPrivMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const wallet = useWallet();

  useEffect(() => {
    fetchPrivMessages();
  }, []);


  async function createNewPrivMessage() {
    console.log("creating new privMessage");

    if (wallet.connected) {
      try {
        const result = await API.graphql(
          graphqlOperation(createPrivMessage, {
            input: {
              senderpubkey: wallet.publicKey.toString(),
              receiverpubkey: "hf8u9432h7f84o3qhy73h",
              content: newMessage,
            },
          })
        );
        console.log("result", result);
        //fetchPrivMessages();
        setNewMessage("");
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  const fetchPrivMessages = async () => {

    if(wallet.connected){
    try {
      console.log("reaching to the graphql api");

      const MessagesData = (await API.graphql(
        graphqlOperation(listPrivMessages)
      )) as any;

      console.log("MessageData", MessagesData);

      const PrivMessages = MessagesData.data.listPrivMessages.items;
      console.log('PrivMessages set to array');
      setPrivMessages(PrivMessages);
    } catch (err) {
      console.log("error fetching messages", err);
    }
  }
  };

  return (
    <div className="w-full pr-4 ml-1 text-black font-custom1 ">
      <div className="h-full ">
        <div className="grid grid-cols-5 ">
          <h1 className="flex flex-row mt-12 col-span-1 text-xl font-semibold font-medium text-black ml-10 ">
            Message <AiOutlineMail className=" mt-1.5 ml-2" />
          </h1>

          <div className="mt-10 col-start-4 col-span-2 flex flex-row align-right gap-5 text-black ml-auto mr-8">
            <BsSearch className=" h-10 w-10 text-black  p-2.5  bg-neutral-focus rounded-full " />
            <FaRegBell className="h-10 w-10 text-black  p-2.5  bg-neutral-focus rounded-full" />
            <div className="flex flex-row gap-5 h-10 p-2 rounded-full bg-neutral-focus">
              <img className="h-6 w-6 rounded-full" src={profilepic} alt="" />
              <p className="mr-1">Feed</p>
              <AiOutlineDown className="w-4 h-3 mt-1.5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 ">
          <div className="col-span-1  ">
            <div className="flex flex-row gap-3 mt-[70px] pr-6 ml-5 col-span-1 border rounded-lg  w-10/12  pl-3">
              <BsSearch className="h-9 w-8 text-black rounded-full  p-1" />
              <input
                className="w-full h-9 rounded-lg border-0 bg-neutral p-2 placeholder:text-gray-400 placeholder:text-sm"
                type="text"
                placeholder="Search..."
              />
            </div>
            {/* Messages */}
            <div className="col-span-3  ">
              <div className="flex flex-col mt-6 ">
                {messages.map((message) => (
                  <div
                    className={classNames(
                      message.active
                        ? "border-l-2 border-blue-500 bg-neutral-content"
                        : " ",
                      "flex flex-col py-2.5 pl-6 gap-3 py-[17px]"
                    )}
                  >
                    <div className="flex flex-row gap-3">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={message.image}
                        alt=""
                      />
                      <div className="grid grid-cols-4 mt-2 w-full">
                        <p className="col-span-3 mt-0.5  font-bold text-sm ">
                          {message.name}
                        </p>
                        <p className="col-start-4 mr-6 text-sm  font-normal text-gray-400 text-right">
                          {message.time}
                        </p>
                      </div>
                    </div>

                    <p className="text-[12.5px] mt-1 text-gray-600 ">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-[60px] border-r border-l ">
            <div className="flex flex-row gap-3 border-b pb-5">
              <img
                className="h-11 w-11 rounded-full ml-5"
                src={messages[0].image}
                alt=""
              />

              <div className="w-full">
                <div className="grid grid-cols-2">
                  <div>
                    <h2 className="col-span-1 font-bold ">Hernald Bold </h2>
                    <p className="text-green-500 text-sm">online</p>
                  </div>

                  <div className="col-start-2 mt-2 ml-16 flex flex-row gap-4 text-gray-500 col-end-3 col-start-2 ">
                    <HiOutlineVideoCamera className="w-8 h-8 border rounded-full p-2" />
                    <FiPhoneCall className="w-8 h-8 border rounded-full p-2" />
                    <BiDotsVerticalRounded className="w-8 h-8 border rounded-full p-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[23px] ml-3 mt-[10px] h-[66%] overscroll-y-auto">
              {/* active messages from me on right from other on left*/}
              {privMessages.map((message) => (
                <div className="grid flex flex-col">
                  {message.senderpubkey === wallet.publicKey.toBase58() ? (
                    <div className="justify-self-end   text-white text-left w-1/2 mr-10">
                      <div className="flex flex-col gap-3">
                        <p className="text-[11px] bg-primary-content py-3.5 px-3 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-xl mr-4">
                          {message.content}
                        </p>

                        <p className="text-[10px] text-right text-gray-400 ">
                          {message.createdAt}
                          <span className="text-[10px]font-bold text-black ml-2">
                            You
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="justify-self-start  p-2 rounded-2xl text-left w-1/2 ">
                      <div className="flex flex-col gap-3">
                        <p className="text-[11px] text-gray-500 py-3.5 px-3 bg-neutral-content p-2 drop-shadow-[0_0px_5px_rgba(0,0,0,0.25)] rounded-xl ">
                          {message.content}
                        </p>

                        <div className="flex flex-row">
                          <p className="text-[10px] font-bold mr-1">
                            {message.senderpubkey}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {message.createdAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* send message */}
            <div className=" grid py-2">
              <textarea
                className="text-xs justify-self-center bg-neutral rounded-lg border-1 border-gray-300 mt-8  form-control block w-11/12 px-3 py-5 text-base font-normal text-gray-700 transitionease-in-out"
                id="message"
                rows={2}
                placeholder="Type a message..."
                value = {newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>

              <div className="w-full grid grid-cols-4 pl-5 ">
                <div className="col-start-1 text-gray-600 gap-2 flex flex-row mt-4 ">
                  <img className="w-5 h-5" src={"./photo.png"} alt="" />
                  <img className="w-4 h-4 mt-0.5" src={"./link.png"} alt="" />
                  <img className="w-5 h-5" src={"./smile.png"} alt="" />
                </div>
                <div className="col-start-4   mt-3 ">
                  <button onClick={createNewPrivMessage} className=" bg-primary-focus font-bold text-sm  text-black rounded-lg shadow p-2 px-8">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1  pr-7 mr-3">
            <div className="grid mb-8 mt-5">
              <RiCloseLine className=" place-self-end border rounded-full h-10 w-10 text-gray-500 p-2" />
            </div>
            <div className="grid grid cols-3 mb-2 ml-4">
              <img
                className="justify-self-center h-[90px] w-[90px] mb-2 rounded-full align-center drop-shadow-lg"
                src="https://www.arweave.net/VrpWAZSnmT9X4IKxR9FFAGGuK6IHJLdgRw-PyJ4lAIM?ext=png"
                alt=""
              />
            </div>

            <div className="ml-3.5 mb-[50px]">
              <h2 className="text-center font-bold ">Hernald Bold</h2>
              <p className="text-gray-500 text-xs text-center ">CEO Bold HQ</p>
            </div>

            <div className="grid grid-cols-2 gap-1.5 ml-5 mt-5">
              <p className="justify-self-start font-bold text-xs">
                Recent files
              </p>
              <AiOutlineDown className="justify-self-end" />
              <p className="text-gray-500 text-[11px]">120 files</p>
            </div>

            <div className="grid grid-cols-2 mt-5 ml-5">
              <div className="flex flex-row gap-2">
                <img className="h-4 w-4 " src="/receipt.png" alt="" />
                <p className="text-gray-500 text-xs text-left  ">
                  InvoiceXX.pdf
                </p>
              </div>
              <BiDotsHorizontalRounded className="ml-24 text-gray-500 text-sm " />
            </div>
            <div className="grid grid-cols-2 mt-5 ml-5">
              <div className="flex flex-row gap-2">
                <img className="h-4 w-4 " src="/receipt.png" alt="" />
                <p className="text-gray-500 text-xs text-left  ">
                  Invoice00.pdf
                </p>
              </div>
              <BiDotsHorizontalRounded className="ml-24 text-gray-500 text-sm " />
            </div>
            <div className="grid grid-cols-2 mt-5 ml-5">
              <div className="flex flex-row gap-2">
                <img className="h-4 w-4 " src="/receipt.png" alt="" />
                <p className="text-gray-500 text-xs text-left  ">Invoice.pdf</p>
              </div>
              <BiDotsHorizontalRounded className="ml-24 text-gray-500 text-sm " />
            </div>

            <div className="grid grid-cols-2 gap-1.5 ml-5 mt-10">
              <p className="justify-self-start font-bold text-xs">Images</p>
              <AiOutlineDown className="justify-self-end" />
              <p className="text-gray-500 text-[11px]">80 images</p>
            </div>

            <div className="grid grid-cols-2 mt-5 ml-5 gap-5">
              <img className="h-26 w-26 rounded-lg" src="1holder.png" alt="" />
              <img className="h-26 w-26 rounded-lg" src="2holder.png" alt="" />
              <img className="h-26 w-26 rounded-lg" src="3holder.png" alt="" />
              <img className="h-26 w-26 rounded-lg" src="4holder.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
