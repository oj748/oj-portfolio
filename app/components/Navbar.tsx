'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{backgroundColor: 'white', borderBottom: '2px solid #e5e7eb', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', position: 'fixed', width: '100%', top: 0, zIndex: 50}}>
      <div style={{maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem'}}>
          {/* Left Side - Name */}
          <div style={{fontSize: '1.25rem', fontWeight: '700', color: '#1f2937'}}>
            COURAGE THE COWARDLY DOG
          </div>
          
          {/* Right Side - Navigation Links */}
          <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/projects" className="nav-link">
              Projects & Achievements
            </Link>
            <Link href="/chat" className="nav-link">
              Chat
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}