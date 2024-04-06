import Link from "next/link";
import React from "react";

const LINKS = [
  { name: "New", href: "/new" },
  { name: "Top", href: "/top" },
  { name: "About", href: "/about" },
] as const;

export default function Header() {
  return (
    <header className="border-b border-neutral-700">
      <div className="flex items-center justify-between max-w-6xl mx-auto md:px-5 py-2">
        <div className="flex items-center gap-10">
          <Link className="text-xl font-bold" href="/">
            rateit
          </Link>
          <nav>
            <ul className="flex items-center gap-5">
              {LINKS.map((link) => (
                <li key={link.name}>
                  <Link className="link-animation" href={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>Sign in</div>
      </div>
    </header>
  );
}
