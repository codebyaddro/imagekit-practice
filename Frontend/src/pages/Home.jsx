import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/posts");
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-lg p-4 shadow">
            <img
              src={post.image}
              alt={post.caption}
              className="w-full rounded-lg"
            />
            <p className="mt-3 text-gray-700">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
