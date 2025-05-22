import { Form } from "react-router";
import type { Route } from "./+types/post";

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const id = params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return { id, data };
};

export const clientAction = async ({ params }: Route.ClientActionArgs) => {
  const id = params.id;
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
};

const post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Post Title - {loaderData.data.title}
      </h1>
      <p className="text-gray-700">Post Body - {loaderData.data.body}</p>
      <Form method="delete">
        <button
          type="submit"
          className="px-2 py-1 text-white bg-black cursor-pointer"
        >
          Delete Post
        </button>
      </Form>
    </div>
  );
};

export default post;
