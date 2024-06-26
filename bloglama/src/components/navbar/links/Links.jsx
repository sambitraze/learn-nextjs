"use client";
import styles from "./links.module.css";
import NavButton from "../navButton/NavButton";
import { useState } from "react";
import Image from "next/image";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];
export default function Links() {
  const [open, setOpen] = useState(false);
  const isLogin = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavButton navItem={link} key={link.title} />
        ))}
        {isLogin ? (
          <>
            {isAdmin && (
              <NavButton
                navItem={{
                  title: "Admin",
                  path: "/admin",
                }}
                key={"Admin"}
              />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavButton
            navItem={{
              title: "Login",
              path: "/login",
            }}
            key={"Login"}
          />
        )}
      </div>
      {/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button> */}
      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)}></Image>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavButton navItem={link} key={link.title} />
          ))}
          {/* {isLogin ? (
            <>
              {isAdmin && (
                <NavButton
                  navItem={{
                    title: "Admin",
                    path: "/admin",
                  }}
                  key={"Admin"}
                />
              )}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavButton
              navItem={{
                title: "Login",
                path: "/login",
              }}
              key={"Login"}
            />
          )} */}
        </div>
      )}
    </div>
  );
}
