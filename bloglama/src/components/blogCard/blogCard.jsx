import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";

export default function BlogCard({blog}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/blog.jpg" alt="" fill className={styles.img}></Image>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.desc}>{blog.body}</p>
        <Link href={`/blogs/${blog.id}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
}
