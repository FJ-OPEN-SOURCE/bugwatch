"use client";
import Link from "next/link";
import { NavbarLinks } from "./HPNavbarLinks";

const HPNavbar: React.FC = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto gap-4 flex justify-between items-center p-4 flex-wrap">
      <Link href="/" className="font-bold">
        Logo
      </Link>
      <ul className="flex gap-8 items-center flex-wrap text-text_light">
        {NavbarLinks.map((link: { text: string; href: string }) => (
          <li key={link.href}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href="/login" className="font-bold">
          Login
        </Link>
        <Link
          href="/signup"
          className="font-bold text-accent_color border border-accent_color rounded-full px-4 py-2 ml-4"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default HPNavbar;
