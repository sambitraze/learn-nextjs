import Image from "next/image";
import styles from "./blogSingle.module.css";
import BlogUser from "@/components/blogUser/blogUser";
import { Suspense } from "react";

const getSingleBlogPost = async (slug) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );

  if (!resp.ok) {
    throw "some error occured";
  }

  return resp.json();
};
export default async function BlogSingle({ params }) {
  const { slug } = params;
  const blog = await getSingleBlogPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/blog.jpg" alt="" fill></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/blog.jpg"
            alt=""
            height={50}
            width={50}
          ></Image>
          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div> */}
          <Suspense fallback={<div>Loading ...</div>}>
            <BlogUser userId={blog.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published On</span>
            <span className={styles.detailValue}>27-06-2024</span>
          </div>
        </div>
        <div className={styles.content}>{blog.body}</div>
      </div>
    </div>
  );
}
