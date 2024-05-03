"use client";
import { HiOutlineTrash } from "react-icons/hi";
import React from "react";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure");
    if (confirmed) {
      const data = await fetch(
        process.env.NEXT_PUBLIC_FETCH_URL + `?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (data.ok) {
        router.refresh();
        router.push("/");
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;

