"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useState, useEffect, useLayoutEffect } from "react";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        console.log("inside gettop");
        const res = await fetch(process.env.NEXT_PUBLIC_FETCH_URL, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("error occured while fetching the data...");
        }
        const data = await res.json();
        setTopics(data.topicData);
      } catch (error) {
        console.log("error loading the topics");
      }
    };

    getTopics();
  }, []);

  return (
    <>
      {topics.map((t) => (
        <div
          key={t.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="front-bold text-2xl">{t.title}</h2>
            <div>{t.content}</div>
            <div className="flex gap-2">
              <RemoveBtn id={t.id} />
              <Link href={`/pages/edit-topic/${t.id}`}>
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

