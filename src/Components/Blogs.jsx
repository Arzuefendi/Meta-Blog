import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbarr from "./Navbarr";
import Footerr from "./Footerr";
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="blogs">
      <Navbarr />

      <h1>BLOGS</h1>
      {posts.map((el) => (
        <div className="blogs-card" key={el.id}>
          <div className="blog-box">
            <h3>{el.title}</h3>
            <p>{el.body}</p>
          </div>
        </div>
      ))}
      <Footerr />
    </div>
  );
};

export default Blogs;
