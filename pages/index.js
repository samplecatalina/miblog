import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listPosts } from '../src/graphql/queries';

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const postData = await API.graphql({ query: listPosts });
    setPosts(postData.data.listPosts.items);
  }
  return (
    <div>
      <h1 className="text-sky-400 text-6xl font-bold underline">
        My Posts
      </h1>
      {
        posts.map((post, index) => (
          <div key={index} className="border-b border-gray-300	mt-8 pb-4">
            <h2 className="text-sky-400 font-semibold">{post.title}</h2>
            <p className="text-gray-500 mt-2">User: {post.username}</p>
          </div>
        ))
      }
    </div>
  )
}
