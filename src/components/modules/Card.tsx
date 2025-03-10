import { v4 as uuidv4 } from "uuid";
import { blogPosts } from "@/utils/data";
import { useState } from "react";
import { IBlog } from "@/types";

import BlogCard from "../elements/BlogCard";

const Card = () => {
  // ============ State ==============
  const [blogs, setBlogs] = useState<IBlog[]>(blogPosts);

  // ============ Rendering ==============
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((post, index) => (
        <BlogCard key={uuidv4()} {...post} />
      ))}
    </div>
  );
};

export default Card;
