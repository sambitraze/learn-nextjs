import Image from "next/image";
import styles from "./blogSingle.module.css";

export default function BlogSingle() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/blog.jpg" alt="" fill></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="/blog.jpg" alt="" height={50} width={50}></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published On</span>
            <span className={styles.detailValue}>27-06-2024</span>
          </div>
        </div>
        <div className={styles.content}>
            lorem
        </div>
      </div>
    </div>
  );
}
