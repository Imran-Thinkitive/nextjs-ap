import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getTopicData = async (id) => {
  try {
    const resp = await fetch(process.env.NEXT_PUBLIC_FETCH_URL + `/${id}`);
    if (!resp.ok) {
      throw new Error("topic is not found by id");
    }
    return await resp.json();
  } catch (error) {
    console.log("error occured", error);
  }
};
const EditTopic = async ({ params }) => {
  const { id } = params;
  const topic = await getTopicData(id);
  const { title, content } = topic;
  return <EditTopicForm id={id} title={title} content={content} />;
};

export default EditTopic;

