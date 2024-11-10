"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <a className="left">
            Mehak <span>Akram</span>
          </a>
          <div className="right">
            <ul>
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href="/about-us">
                <li>About</li>
              </Link>
              <Link href="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link href="/contact-us">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      <hr />
    </div>
  );
}
