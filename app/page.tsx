import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
          <a href="#hero" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              IP
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Go
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
                <a href="/sponsor-asn" className="block px-4 py-2 text-slate-800 hover:bg-slate-50">
                  Sponsor ASN
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
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-red-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main id="hero" className="mx-auto max-w-6xl px-4 pb-20 pt-10 lg:px-0 lg:pt-16">
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your Trusted
              <br />
              Partner for IPv4
              <br />
              Address Needs
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              A dedicated IPv4 brokerage desk helping organizations buy, sell,
              and lease address space with a simple, guided process and
              registry-compliant transfers.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-red-500 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 shadow-sm hover:bg-red-50"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm rounded-[32px] bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="pointer-events-none absolute left-1/2 top-4 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-200" />
              <div className="mt-8 overflow-hidden rounded-3xl bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                  alt="Close-up of network switches and Ethernet cables in a data center"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 pb-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-[28px] bg-white px-8 py-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:flex-row md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experienced broker of
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-700">
              <span className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-sky-100" />
                <span>RIPE NCC</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-slate-100" />
                <span>ARIN</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-amber-100" />
                <span>LACNIC</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-indigo-100" />
                <span>APNIC</span>
              </span>
            </div>
          </div>
        </section>

        <section className="grid gap-14 border-t border-slate-200 py-16 md:grid-cols-2 md:items-center">
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="pointer-events-none absolute -left-10 -top-10 hidden h-full w-full rounded-[44px] border border-slate-100 md:block" />
              <div className="overflow-hidden rounded-[32px] bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1587202372775-98927f504d09?auto=format&fit=crop&w=1400&q=80"
                  alt="Perspective view down a brightly lit data center aisle"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
              End-to-end IPv4 transactions
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We focus on making IPv4 address deals straightforward, secure, and
              transparent. Whether you are buying, selling, or leasing address
              space, our team guides every step so you always know where your
              transfer stands.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              From matching supply and demand to coordinating escrow and RIR
              documentation, we keep both sides aligned and your project moving
              quickly toward completion.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-red-500 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 shadow-sm hover:bg-red-50"
            >
              Contact Us
            </a>
          </div>
        </section>

        <section className="grid gap-14 pb-16 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              We Make IPv4 Transfers Simple
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Looking for additional IPv4 space without the noise and risk of
              unverified marketplaces? Our brokerage desk brings together vetted
              counterparties, clear documentation, and predictable timelines so
              that every transfer feels routine instead of stressful.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              You get a single point of contact who coordinates legal, technical,
              and RIR requirementsfrom the first discussion through final
              confirmation in your registry account.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-red-500 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 shadow-sm hover:bg-red-50"
            >
              Contact Us
            </a>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
              <div className="pointer-events-none absolute -right-10 -bottom-10 hidden h-full w-full rounded-[44px] border border-slate-100 md:block" />
              <div className="overflow-hidden rounded-[32px] bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
                  alt="Business professional using a tablet with digital network icons overlayed"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative mt-6 overflow-hidden rounded-[2.5rem] bg-slate-950 py-12 text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#0ea5e9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#ef4444_0,_transparent_55%)] opacity-40" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 text-center">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                Our services include
              </p>
              <h2 className="text-2xl font-semibold">End-to-end IPv4 address services.</h2>
              <p className="text-sm text-slate-200">
                Dedicated brokerage and advisory across global RIRs, designed
                for operators who value certainty, speed, and compliance.
              </p>
            </div>
            <div className="grid gap-4 text-left text-sm md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <h3 className="text-sm font-semibold">Buy IPv4</h3>
                <p className="mt-2 text-xs text-slate-200">
                  Curated supply and guided negotiations to secure clean
                  prefixes that fit your budget and region.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <h3 className="text-sm font-semibold">Sell IPv4</h3>
                <p className="mt-2 text-xs text-slate-200">
                  Monetize unused address space with vetted buyers and
                  transparent, market-aligned pricing.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <h3 className="text-sm font-semibold">Lease IPv4</h3>
                <p className="mt-2 text-xs text-slate-200">
                  Flexible term-based leasing for growing networks that need
                  capacity without a permanent acquisition.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <h3 className="text-sm font-semibold">Email Marketing</h3>
                <p className="mt-2 text-xs text-slate-200">
                  Help with sourcing and managing leased IPs for email programs,
                  following clean sending practices and global standards like
                  CAN-SPAM.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how"
          className="grid gap-10 border-b border-slate-200 py-16 md:grid-cols-2 md:items-center"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
              Simplifying RIR workflows
            </p>
            <h2 className="text-2xl font-semibold">
              Simplifying IPv4 address trading across all major RIRs.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Every registry has its own language, documentation, and timelines.
              We translate requirements into clear steps, prepare your files,
              and liaise with RIR staff on your behalf so you always know what
              happens next.
            </p>
            <div className="grid gap-4 text-xs text-slate-600 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-800">For buyers</h3>
                <p className="mt-1">
                  Justify need, pass due diligence, and close faster with a
                  structured, documented process.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">For sellers</h3>
                <p className="mt-1">
                  Clean up records, validate ownership, and handle legacy
                  documentation with our team.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),radial-gradient(circle_at_bottom,_#a855f7_0,_transparent_55%)] opacity-60" />
            <div className="relative space-y-4 text-sm">
              <h3 className="text-base font-semibold">How we do it</h3>
              <ol className="space-y-3 text-slate-100">
                <li>
                  <span className="font-semibold">1. Discovery call.</span> We
                  map out your IPv4 requirements, budget, and timelines.
                </li>
                <li>
                  <span className="font-semibold">2. Shortlist &amp; LOI.</span>
                  We curate matching prefixes and coordinate letters of intent.
                </li>
                <li>
                  <span className="font-semibold">3. Escrow &amp;
                  verification.</span> Funds and ownership are verified before
                  RIR submission.
                </li>
                <li>
                  <span className="font-semibold">4. RIR approval &amp;
                  handoff.</span> We guide your team until space lands in your
                  account.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <section
        id="contact"
        className="bg-slate-950 py-16 text-white md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:px-0">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)] opacity-40" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                If you'd like us to contact you
              </p>
              <h2 className="text-2xl font-semibold">
                Share a few details about your IPv4 requirements.
              </h2>
              <p className="text-sm text-slate-200">
                Tell us whether you're looking to buy, sell, or lease address
                space and our brokerage desk will get back within one business
                day.
              </p>
              <div className="mt-6 overflow-hidden rounded-3xl bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1587202372775-98927f504d09?auto=format&fit=crop&w=1400&q=80"
                  alt="Row of server racks in a modern data center"
                  width={900}
                  height={540}
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <form className="space-y-5 rounded-3xl bg-slate-900/80 p-8 shadow-xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Full name
                </label>
                <input
                  type="text"
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
                  <input type="checkbox" className="h-3 w-3 rounded border-slate-500 bg-slate-900" />
                  <span>Buy IPv4 space</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400">
                  <input type="checkbox" className="h-3 w-3 rounded border-slate-500 bg-slate-900" />
                  <span>Sell IPv4 space</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400">
                  <input type="checkbox" className="h-3 w-3 rounded border-slate-500 bg-slate-900" />
                  <span>Lease IPv4 space</span>
                </label>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Describe your requirements
              </label>
              <textarea
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

      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-sm text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:items-start lg:justify-between lg:px-0">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                IP
              </div>
              <span className="text-sm font-semibold">IPv4 Brokerage</span>
            </div>
            <p className="max-w-sm text-xs text-slate-400">
              A dedicated desk helping buyers, sellers, and lessors close
              compliant IPv4 transactions across the globe.
            </p>
          </div>
          <div className="grid flex-1 gap-8 text-xs sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Main links
              </h3>
              <div className="space-y-2">
                <a href="#hero" className="block hover:text-white">
                  Overview
                </a>
                <a href="#services" className="block hover:text-white">
                  Services
                </a>
                <a href="#how" className="block hover:text-white">
                  How it works
                </a>
                <a href="#blog" className="block hover:text-white">
                  Blog
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Company
              </h3>
              <div className="space-y-2">
                <span className="block text-slate-400">About</span>
                <span className="block text-slate-400">Security</span>
                <span className="block text-slate-400">Careers</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Contact
              </h3>
              <div className="space-y-2 text-slate-400">
                <p>brokerage@example.com</p>
                <p>+1 (555) 555 0000</p>
                <p>Mon–Fri · 9:00–18:00 UTC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-4 border-t border-slate-800 px-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between lg:px-0">
          <p>
            © {new Date().getFullYear()} IPv4 Brokerage. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Status</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

