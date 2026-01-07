import Image from "next/image";
import { MessageCircle, Mail, HelpCircle, Globe, FileText } from "lucide-react";
import { FaBitcoin, FaUniversity, FaMoneyCheckAlt } from "react-icons/fa";

export default function ContactPage() {
  const paymentMethods: { name: string; Icon?: React.ComponentType<{ className?: string }> }[] = [
    { name: "Crypto", Icon: FaBitcoin },
    { name: "Bank Transfer", Icon: FaUniversity },
    { name: "Wire Transfer", Icon: FaMoneyCheckAlt },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-auto px-2 items-center justify-center rounded-xl bg-red-600 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              IPv4
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Premium
              </span>
              <span className="text-[11px] text-slate-500">
                Buy · Sell · Lease
              </span>
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
            <a href="/contact" className="text-red-600">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-red-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main className="pb-20">
        {/* Hero banner */}
        <section className="relative h-80 w-full overflow-visible bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="absolute inset-0" style={{ backgroundImage: "url('/images/pattern.png')" }}></div>
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center gap-4 px-4 text-center lg:px-0">
            <h1 className="text-4xl font-bold sm:text-5xl">IPv4Premium Help is Available!</h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300">
              Whether you need to quickly source scarce IPv4 addresses, navigate complex registry requirements,
              or monetize dormant address blocks, our experienced team is here to assist you at every step.
            </p>
          </div>
        </section>

        {/* Support channels */}
        <section className="mx-auto mt-10 flex max-w-4xl flex-col items-center px-4 pb-8 lg:px-0">
          <div className="w-full max-w-xl">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Email Support</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Email our team with your detailed needs and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:contact@ipv4premium.com" className="mt-4 inline-block rounded-lg border border-red-600 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-600 hover:text-white">
                Send Email
              </a>
            </div>
          </div>
        </section>

        {/* Locations section */}


        {/* Payment methods */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 lg:px-0">
            <h2 className="text-center text-3xl font-bold text-slate-900">
              You can pay us via
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
              {paymentMethods.map(({ name, Icon }) => (
                <div key={name} className="flex flex-col items-center text-center">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    {Icon ? (
                      <Icon className="h-8 w-8 text-slate-800" />
                    ) : (
                      <Globe className="h-7 w-7 text-slate-500" />
                    )}
                  </div>
                  <span className="text-xs text-slate-600">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main contact form block */}
        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:px-0">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)] opacity-40" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  If you'd like us to contact you
                </p>
                <h2 className="text-2xl font-semibold">
                  Tell us a bit about the IPv4 help you need.
                </h2>
                <p className="text-sm text-slate-200">
                  Share whether you want to buy, sell, or lease space and any
                  timelines we should keep in mind. Our team will follow up with
                  next steps.
                </p>
                <div className="mt-6 overflow-hidden rounded-3xl bg-slate-900">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Modern data center hallway"
                    width={900}
                    height={540}
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5 rounded-3xl bg-slate-900/80 p-8 shadow-xl">
              <input type="hidden" name="access_key" value="974f34ae-14d6-4b5d-b724-96fbd46082ad" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="Your organization"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Work email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="+1 555 000 0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  I want to
                </p>
                <div className="grid gap-2 text-xs md:grid-cols-3">
                  <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400">
                    <input type="checkbox" name="interest" value="Buy IPv4 space" className="h-3 w-3 rounded border-slate-500 bg-slate-900" />
                    <span>Buy IPv4 space</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400">
                    <input type="checkbox" name="interest" value="Sell IPv4 space" className="h-3 w-3 rounded border-slate-500 bg-slate-900" />
                    <span>Sell IPv4 space</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400">
                    <input type="checkbox" name="interest" value="Lease IPv4 space" className="h-3 w-3 rounded border-slate-500 bg-slate-900" />
                    <span>Lease IPv4 space</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Describe your requirements
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Share as much detail as you can - expected prefix size, region, timeline, and any RIR constraints."
                />
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-red-700 md:w-auto"
                >
                  Submit request
                </button>
                <p>
                  By submitting this form you agree that we may contact you about
                  IPv4 address services in accordance with our standard privacy
                  practices.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
