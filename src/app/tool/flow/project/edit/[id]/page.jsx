import EditProject from "@/components/Tool/Flow/Project/EditProject";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://databayt.com/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditProject id={id} title={title} description={description} />;
}
