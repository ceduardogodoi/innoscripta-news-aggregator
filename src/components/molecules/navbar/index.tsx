import Link from "next/link";

export function Navbar() {
  return (
    <ul className="hidden gap-[inherit] lg:flex">
      <li className="group">
        <Link
          className="border-b border-b-transparent transition-all group-hover:border-b-red-500"
          target="_blank"
          href="https://www.theguardian.com/international"
        >
          The Guardian
        </Link>
      </li>

      <li className="group">
        <Link
          className="border-b border-b-transparent transition-all group-hover:border-b-red-500"
          target="_blank"
          href="https://www.nytimes.com/"
        >
          New York Times
        </Link>
      </li>
    </ul>
  );
}
