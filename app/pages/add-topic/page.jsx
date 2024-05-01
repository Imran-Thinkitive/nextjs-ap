"use client";
import React, { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("form submitted");
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      console.log("res : ", res);

      if (res.ok) {
        console.log("Post request successful");
      }
    } catch (error) {
      console.log("errors");
    }
    setTitle("");
    setDescription("");
    console.log("submitted successfully");
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
        onChange={(e) => setDescription(e.target.value)}
        value={description}
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
