"use client";

import Link from "next/link"

let Footer = ()=>{
    return(
        <div>
        <footer>
        <div className="footer">
          <ul className="inner-items">
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
          <div className="blank-foot"><p className="text-heading">© 2024 Mehak Akram | All Rights Reserved.</p></div>
        </div>
        
      </footer> 
    </div>
    )
}

export default Footer