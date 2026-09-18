import { useState } from 'react'
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import posts from "./data/posts.json"
import './App.css'

function App() {
  const [search,setSearch] = useState("");
  const [category,setCategory]=useState("All");

  const categories = ["All","React","JavaScript","CSS"];
  const filteredPosts = posts.filter((post)=>{
    const matchesSearch = post.title 
    .toLowerCase()
    .includes(search.toLowerCase());

    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });
  return (
    <>
      <Header />

            <main>

                <input
                    type="text"
                    placeholder="Search posts..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />

                <select
                    value={category}
                    onChange={(event) =>
                        setCategory(event.target.value)
                    }
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <div className="posts">

                    {filteredPosts.length > 0 ? (

                        filteredPosts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                            />
                        ))

                    ) : (
                        <p>No posts found.</p>
                    )}

                </div>

            </main>
    </>
  );
}

export default App
