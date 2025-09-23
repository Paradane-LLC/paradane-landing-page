import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-zinc-800 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
                <Link href="/" className="relative w-28 md:w-32 h-8 flex-shrink-0">
                    <Logo color={`#00489c`} />
                </Link>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="https://x.com/ParadaneLLC" target="_blank" className="w-5 h-5 flex items-center justify-center transition-colors">
                <svg className="text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="w-5 h-5 flex items-center justify-center transition-colors">
                <svg className="text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="#" className="w-5 h-5 flex items-center justify-center transition-colors">
                <svg className="text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="#" className="w-5 h-5 flex items-center justify-center transition-colors">
                <svg className="text-zinc-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Link>
            </div>
          </div>

            {/* Services Column */}
            <div>
                <h3 className="text-zinc-800 font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Website Development</Link></li>
                <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Social Media Marketing</Link></li>
                <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">User Interface Design</Link></li>
                <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Search Engine Optimization</Link></li>
                </ul>
            </div>

          <div>
            <h3 className="text-zinc-800 font-semibold mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">About</Link></li>
              <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Contact</Link></li>
              <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

            {/* Legal Column */}
            <div>
            <h3 className="text-zinc-800 font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                    <li><Link href="https://help.paradane.com/portal/en/kb/articles/age-verification-policy" target="_blank" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Age Verification Policy</Link></li>
                    <li><Link href="https://help.paradane.com/portal/en/kb/articles/cookies-policy" target="_blank" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Cookies Policy</Link></li>
                    <li><Link href="https://help.paradane.com/portal/en/kb/articles/community-guidelines" target="_blank" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Community Guidelines</Link></li>
                    <li><Link href="https://help.paradane.com/portal/en/kb/articles/disclaimer" target="_blank" className="text-zinc-800 hover:text-zinc-950 transitio  n-colors text-sm">Disclaimer</Link></li>
                </ul>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-300 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-zinc-800 text-sm mb-4 md:mb-0">© {currentYear} Paradane LLC. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="https://help.paradane.com/portal/en/kb/articles/terms-services" target="_blank" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Terms & Services</Link>
            <Link href="https://help.paradane.com/portal/en/kb/articles/privacy-policy" target="_blank" className="text-zinc-800 hover:text-zinc-950 transition-colors text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;