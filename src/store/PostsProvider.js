import React, { createContext, useState, useEffect } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your server
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const fetchPosts = async () => {
    // Fetch posts from your server using fetch or axios
    const response = await fetch(
      "https://us-central1-music-app-d9fea.cloudfunctions.net/getPosts"
    ); //replace with firebase functions
    const data = await response.json();
    const myPosts = JSON.parse(data.post);

    return myPosts;
  };

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};

export { PostsProvider, PostsContext };
