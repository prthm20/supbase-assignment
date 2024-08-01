// components/Footer.js

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaYoutube,
  } from "react-icons/fa";
  import Link from "next/link";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and About */}
            <div>
              <h2 className="text-2xl font-semibold">Neon, Inc.</h2>
              <p className="mt-2">All systems operational. Made in SF and the World</p>
              <p className="mt-1 text-sm">&copy; 2022 – 2024 Neon, Inc.</p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Trust
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Contact Sales
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Early Access
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="" className="hover:text-white">
                    AI
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Community Guides
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Demos
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold">Community</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="" className="hover:text-white">
                    <FaTwitter className="inline-block mr-2" />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    <FaLinkedin className="inline-block mr-2" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    <FaGithub className="inline-block mr-2" />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="=" className="hover:text-white">
                    <FaDiscord className="inline-block mr-2" />
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Discourse
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    <FaYoutube className="inline-block mr-2" />
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold">Creators</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    DPA
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Subprocessors List
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Privacy Guide
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-white">
                    Business Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  