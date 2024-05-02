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
        const res = await fetch(process.env.NEXT_PUBLIC_FETCH_URL);

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
      {topics.map((t) => (
        <div
          key={t.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 item-start"
        >
          {console.log(t.id, t.title, t.content, "data in return")}
          <div>
            <h2 className="front-bold text-2xl">{t.title}</h2>
            <div>{t.content}</div>
            <div className="flex gap-2">
              <RemoveBtn />
              <Link href={`/editTopic/${t.id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
