import axios from "axios";

export const getPosts = () =>
  axios({ method: "GET", url: "https://jsonplaceholder.typicode.com/posts" });

export const getPost = (id) =>
  axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });

export const updatePost = (post) =>
  axios({
    method: "PUT",
    url: `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    headers: { "Content-type": "application/json; charset=UTF-8" },
    data: post,
  });
