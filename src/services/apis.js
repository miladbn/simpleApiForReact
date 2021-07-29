import axios from "axios";

export const getAllPosts = () =>
  axios({ method: "GET", url: "https://jsonplaceholder.typicode.com/posts" });

export const getSinglePost = (id) =>
  axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });

export const updatePost = (id, title, body, userId) =>
  axios({
    method: "PUT",
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: {
      id: id,
      title: title,
      body: body,
      userId: userId,
    },
  });
