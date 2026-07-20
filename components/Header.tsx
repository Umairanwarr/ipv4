"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="IPv4Premium" className="h-14 w-auto" />
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold leading-none text-[#0f172a] tracking-tight">Premium</span>
            <span className="text-[13px] font-medium text-slate-500 mt-0.5">Buy &middot; Sell &middot; Lease</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="/about" className="hover:text-red-600">
            About us
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              <span>Services</span>
              <span className="mt-0.5 text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-44 rounded-2xl border border-slate-200 bg-white py-2 text-sm shadow-xl opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <a href="/buy-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buy IPv4
              </a>
              <a href="/sell-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Sell IPv4
              </a>
              <a href="/lease-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Lease IPv4
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              <span>RIR</span>
              <span className="mt-0.5 text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-2xl border border-slate-200 bg-white py-2 text-sm shadow-xl opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <a href="/buy-afrinic-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buy AFRINIC IPV4
              </a>
              <a href="/buy-apnic-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buy APNIC IPV4
              </a>
              <a href="/buy-arin-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buy ARIN IPV4
              </a>
              <a href="/buy-lacnic-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buy LACNIC IPV4
              </a>
              <a href="/buy-ripe-ipv4" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buy RIPE IPV4
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              <span>Process</span>
              <span className="mt-0.5 text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-60 rounded-2xl border border-slate-200 bg-white py-2 text-sm shadow-xl opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <a href="/buy-ipv4-from-us" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Buying IPv4 From Us
              </a>
              <a href="/sell-ipv4-to-us" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Selling IPv4 to Us
              </a>
              <a href="/lease-ipv4-from-us" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Leasing IPv4 From Us
              </a>
              <a href="/lease-ipv4-to-us" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                Leasing IPv4 To Us
              </a>
            </div>
          </div>
          <a href="/contact" className="hover:text-red-600">
            Contact
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-red-700"
          >
            Get in touch
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-700 hover:text-red-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <a href="/about" className="block text-base font-semibold text-slate-900 hover:text-red-600">
              About us
            </a>
            
            <div className="space-y-2">
              <button 
                onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-900 hover:text-red-600 focus:outline-none"
              >
                <span>Services</span>
                <span className="text-xs">{mobileDropdown === 'services' ? '▴' : '▾'}</span>
              </button>
              {mobileDropdown === 'services' && (
                <div className="pl-4 space-y-3 pt-1">
                  <a href="/buy-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Buy IPv4</a>
                  <a href="/sell-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Sell IPv4</a>
                  <a href="/lease-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Lease IPv4</a>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => setMobileDropdown(mobileDropdown === 'rir' ? null : 'rir')}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-900 hover:text-red-600 focus:outline-none"
              >
                <span>RIR</span>
                <span className="text-xs">{mobileDropdown === 'rir' ? '▴' : '▾'}</span>
              </button>
              {mobileDropdown === 'rir' && (
                <div className="pl-4 space-y-3 pt-1">
                  <a href="/buy-afrinic-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Buy AFRINIC IPV4</a>
                  <a href="/buy-apnic-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Buy APNIC IPV4</a>
                  <a href="/buy-arin-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Buy ARIN IPV4</a>
                  <a href="/buy-lacnic-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Buy LACNIC IPV4</a>
                  <a href="/buy-ripe-ipv4" className="block text-sm text-slate-600 hover:text-red-600">Buy RIPE IPV4</a>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => setMobileDropdown(mobileDropdown === 'process' ? null : 'process')}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-900 hover:text-red-600 focus:outline-none"
              >
                <span>Process</span>
                <span className="text-xs">{mobileDropdown === 'process' ? '▴' : '▾'}</span>
              </button>
              {mobileDropdown === 'process' && (
                <div className="pl-4 space-y-3 pt-1">
                  <a href="/buy-ipv4-from-us" className="block text-sm text-slate-600 hover:text-red-600">Buying IPv4 From Us</a>
                  <a href="/sell-ipv4-to-us" className="block text-sm text-slate-600 hover:text-red-600">Selling IPv4 to Us</a>
                  <a href="/lease-ipv4-from-us" className="block text-sm text-slate-600 hover:text-red-600">Leasing IPv4 From Us</a>
                  <a href="/lease-ipv4-to-us" className="block text-sm text-slate-600 hover:text-red-600">Leasing IPv4 To Us</a>
                </div>
              )}
            </div>

            <a href="/contact" className="block text-base font-semibold text-slate-900 hover:text-red-600">
              Contact
            </a>
            <div className="pt-4 pb-2">
              <a
                href="/#contact"
                className="inline-flex w-full justify-center rounded-full bg-red-600 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-red-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
