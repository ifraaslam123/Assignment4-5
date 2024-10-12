import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-4">
        <ul className="header">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/responsive">Blogs</Link>
          </li>
          <li>
            <Link href="/responsive-2">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}