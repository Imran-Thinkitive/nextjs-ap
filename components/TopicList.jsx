"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useState, useLayoutEffect } from "react";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useLayoutEffect(() => {
    const getTopics = async () => {
      try {
        console.log("inside gettop");
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("error occured while fetching the data...");
        }
        const data = await res.json();
        console.log("data : ", data.topicData);
        setTopics(data.topicData);
      } catch (error) {
        console.log("error loading the topics");
      }
    };

    getTopics();
  }, [setTopics]);

  return (
    <>
      {console.log("topics :", topics)};
      {topics.map((t) => (
        <>
          {console.log("event t : ", t)}
          <div
            key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 item-start"
          >
            <div>
              <h2 className="front-bold text-2xl">{t.title}</h2>
              <div>{t.discription}</div>
              <div className="flex gap-2">
                <RemoveBtn />
                <Link href={`/editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default TopicList;
