"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 mx-5 h-14 items-center">
      <Link href="/">
        <FaBug></FaBug>
      </Link>
      <ul className="flex space-x-6 text-2xl ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-900 transition-colors": true,
              })}
            >
              {link.lable}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
