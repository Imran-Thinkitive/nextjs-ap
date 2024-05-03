"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!title || !content) {
      alert("title and description required.");
      return;
    }
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FETCH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create topics");
      }
    } catch (error) {
      console.log("errors");
    }
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;

