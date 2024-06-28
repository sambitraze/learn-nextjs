import styles from "./blogUser.module.css";

const getUserById = async (userId) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
        cache: 'no-store'
    }
  );

  if (!resp.ok) {
    throw "some error occured";
  }

  return resp.json();
};

export default async function BlogUser({ userId }) {
  const userData = await getUserById(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{userData.username}</span>
    </div>
  );
}
