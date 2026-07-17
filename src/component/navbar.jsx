"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'pages' | 'service' | null

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* Logo Section */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.png"
              alt="TrustMove Packers and Movers Logo"
              width={100}
              height={50}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
          <li>
            <Link
              href="/"
              className={`${styles.link} ${isActive("/") ? styles.activeLink : ""}`}
              onClick={closeAll}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.link} ${isActive("/about") ? styles.activeLink : ""}`}
              onClick={closeAll}
            >
              About Us
            </Link>
          </li>

          <li className={`${styles.hasDropdown} ${openDropdown === "pages" ? styles.mobileDropdownOpen : ""}`}>
            <span className={styles.link} onClick={() => toggleDropdown("pages")}>
              Pages <span className={styles.arrow}>▼</span>
            </span>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/gallery" onClick={closeAll}>Gallery</Link></li>
              <li><Link href="/faq" onClick={closeAll}>faq</Link></li>
            </ul>
          </li>

          <li>
            <Link
              href="/blog"
              className={`${styles.link} ${isActive("/blog") ? styles.activeLink : ""}`}
              onClick={closeAll}
            >
              Blog
            </Link>
          </li>

          <li className={`${styles.hasDropdown} ${openDropdown === "service" ? styles.mobileDropdownOpen : ""}`}>
            <span className={styles.link} onClick={() => toggleDropdown("service")}>
              Service <span className={styles.arrow}>▼</span>
            </span>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/services/home-shifting" onClick={closeAll}>Home Shifting</Link></li>
              <li><Link href="/services/office-shifting" onClick={closeAll}>Office Shifting</Link></li>
              <li><Link href="/services/warehouse-service" onClick={closeAll}>Warehouse Services</Link></li>
              <li><Link href="/services/loading-unloading" onClick={closeAll}>Loading & Unloading</Link></li>
              <li><Link href="/services/packing-unpacking" onClick={closeAll}>Packing & Unpacking</Link></li>
              <li><Link href="/services/insurance-service" onClick={closeAll}>Transit Insurance Service</Link></li>
            </ul>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${styles.link} ${isActive("/contact") ? styles.activeLink : ""}`}
              onClick={closeAll}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className={styles.navCta}>
          <Link href="/contact" className={styles.ctaButton}>
            Get A Quote →
          </Link>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}