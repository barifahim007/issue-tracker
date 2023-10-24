import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 mx-5 h-14 items-center">
      <Link href="/">
        <FaBug></FaBug>
      </Link>
      <ul className="flex space-x-6  ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-2xl text-zinc-500 hover:text-zinc-900 transition-colors "
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
