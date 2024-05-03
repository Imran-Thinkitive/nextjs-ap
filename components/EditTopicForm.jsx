"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, content }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const router = useRouter();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await fetch(process.env.NEXT_PUBLIC_FETCH_URL + `/${id}`, {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify({ newTitle, newContent }),
      });
      if (!data.ok) {
        throw new Error("data is not updated error occured");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("error occured when updated the data");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setNewContent(e.target.value)}
        value={newContent}
        type="text"
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Edit Topic
      </button>
    </form>
  );
}

