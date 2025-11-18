import Image from "next/image";

export default function BuyingIPv4FromUsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              IP
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">Go</span>
              <span className="text-[11px] text-slate-500">Buy · Sell · Lease</span>
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

      <main className="pb-20">
        <section className="relative h-80 w-full overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
              alt="City skyline representing global connectivity"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/75" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 text-white lg:px-0">
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Buying IPv4 Addresses from IPv4Mall
            </h1>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4 text-sm leading-relaxed text-slate-600">
            <p>
              Buying IPv4 space is one of the most critical decisions for a network, but it does not have to be complex.
              With a structured process and the right partner, you can secure the address space you need while staying fully
              compliant with registry policy.
            </p>
            <p>
              We combine hands-on brokerage experience with deep knowledge of RIR procedures. From first analysis through
              transfer completion, we keep you informed and protect your interests at every step.
            </p>
            <p>
              Our team works transparently, sharing market context, pricing guidance, and vetted counterparties so that you
              can focus on how new space supports your growth.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
                    alt="Businessperson reviewing digital compliance checklist"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-5xl px-4 text-center lg:px-0">
          <h2 className="text-2xl font-semibold text-slate-900">Step By Step Guide</h2>
          <div className="mt-12 space-y-10">
            <div className="relative flex justify-center">
              <div className="relative flex w-full max-w-4xl items-center rounded-full bg-white px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="absolute left-32 right-0 top-0 h-[3px] rounded-full bg-red-500" />
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-red-500 bg-white text-sm font-semibold text-red-600">
                  Step 01
                </div>
                <div className="ml-6 flex-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">NDA Sign</p>
                  <p className="mt-1 text-xs text-slate-600">We sign an NDA and a non-disclosure agreement so details stay confidential.</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative flex w-full max-w-4xl flex-row-reverse items-center rounded-full bg-white px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="absolute left-0 right-32 bottom-0 h-[3px] rounded-full bg-red-500" />
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-red-500 bg-white text-sm font-semibold text-red-600">
                  Step 02
                </div>
                <div className="mr-6 flex-1 text-right">
                  <p className="text-sm font-semibold text-slate-900">Analyse</p>
                  <p className="mt-1 text-xs text-slate-600">You provide us with your IPv4 requirements. We analyse fit and availability.</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative flex w-full max-w-4xl items-center rounded-full bg-white px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="absolute left-32 right-0 top-0 h-[3px] rounded-full bg-red-500" />
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-red-500 bg-white text-sm font-semibold text-red-600">
                  Step 03
                </div>
                <div className="ml-6 flex-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">Agreement</p>
                  <p className="mt-1 text-xs text-slate-600">We align on ranges, pricing, and timelines and sign a purchase agreement.</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative flex w-full max-w-4xl flex-row-reverse items-center rounded-full bg-white px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="absolute left-0 right-32 bottom-0 h-[3px] rounded-full bg-red-500" />
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-red-500 bg-white text-sm font-semibold text-red-600">
                  Step 04
                </div>
                <div className="mr-6 flex-1 text-right">
                  <p className="text-sm font-semibold text-slate-900">Payment</p>
                  <p className="mt-1 text-xs text-slate-600">You transfer funds to the agreed escrow or payment channel.</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative flex w-full max-w-4xl items-center rounded-full bg-white px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="absolute left-32 right-0 top-0 h-[3px] rounded-full bg-red-500" />
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-red-500 bg-white text-sm font-semibold text-red-600">
                  Step 05
                </div>
                <div className="ml-6 flex-1 text-left">
                  <p className="text-sm font-semibold text-slate-900">Collaboration</p>
                  <p className="mt-1 text-xs text-slate-600">We work with the seller and RIR to prepare and submit the transfer request.</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative flex w-full max-w-4xl flex-row-reverse items-center rounded-full bg-white px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="absolute left-0 right-32 bottom-0 h-[3px] rounded-full bg-red-500" />
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-[3px] border-red-500 bg-white text-sm font-semibold text-red-600">
                  Step 06
                </div>
                <div className="mr-6 flex-1 text-right">
                  <p className="text-sm font-semibold text-slate-900">Transaction</p>
                  <p className="mt-1 text-xs text-slate-600">The seller releases the IPv4 block and you start announcing it in your network.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-20 bg-slate-950 py-16 text-white"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:px-0">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),radial-gradient(circle_at_bottom,_#f97316_0,_transparent_55%)] opacity-40" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  If you'd like us to contact you
                </p>
                <h2 className="text-2xl font-semibold">
                  Kindly fill the form below and our IPv4 specialist will contact you.
                </h2>
                <p className="text-sm text-slate-200">
                  Share your IPv4 requirements, regions, and timelines. We'll respond with concrete options and a suggested
                  path forward.
                </p>
                <div className="mt-6 overflow-hidden rounded-3xl bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1587202372775-98927f504d09?auto=format&fit=crop&w=1400&q=80"
                    alt="Modern data center hallway"
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
                    Name
                  </label>
                  <input
                    type="text"
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="+1 555 000 0000"
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
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  I am interested in
                </p>
                <div className="grid gap-2 text-xs sm:grid-cols-3">
                  {[
                    "Buying IPv4",
                    "Selling IPv4",
                    "Leasing IPv4",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400"
                    >
                      <input
                        type="checkbox"
                        className="h-3 w-3 rounded border-slate-500 bg-slate-900"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Share any details about your IPv4 requirements, regions, and timelines."
                />
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-red-700 md:w-auto"
                >
                  Submit
                </button>
                <p>
                  By submitting this form you agree that we may contact you about IPv4 brokerage services in accordance with
                  our standard privacy practices.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
