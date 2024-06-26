import BlogCard from "@/components/blogCard/blogCard";
import styles from "./blogs.module.css";

export default function Blogs() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <BlogCard />
      </div>
      <div className={styles.box}>
        <BlogCard />
      </div>
      <div className={styles.box}>
        <BlogCard />
      </div>
      <div className={styles.box}>
        <BlogCard />
      </div>
    </div>
  );
}
