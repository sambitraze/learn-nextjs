import BlogCard from "@/components/blogCard/blogCard";
import styles from "./blogs.module.css";
const getBlogPosts = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!resp.ok) {
    throw "some error occured";
  }

  return resp.json();
};
export default async function Blogs() {
  const blogs = await getBlogPosts();
  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <div className={styles.box} key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
}
