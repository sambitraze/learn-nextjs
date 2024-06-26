"use client";

import Link from "next/link";
import styles from "./navButton.module.css";
import { usePathname } from "next/navigation";
export default function NavButton({ navItem }) {
  const pathName = usePathname();
  return (
    <Link
      href={navItem.path}
      className={`${styles.container} ${
        pathName === navItem.path && styles.active
      }`}
    >
      {navItem.title}
    </Link>
  );
}
