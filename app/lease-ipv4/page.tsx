import Image from "next/image";

export default function LeaseIPv4Page() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-auto px-2 items-center justify-center rounded-xl bg-red-600 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              IPv4
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">Premium</span>
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
              src="/images/hero-bg.png"
              alt="City skyline representing global network infrastructure"
              fill
              className="object-cover opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/75" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center gap-4 px-4 text-white lg:px-0">
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Lease IPv4 Addresses
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-200">
              Secure reliable IPv4 capacity without a permanent acquisition. We help you lease clean, routable space across
              major RIR regions with clear terms, predictable pricing, and ongoing support.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col items-center px-4 text-center lg:px-0">
          <h2 className="text-2xl font-semibold text-black">
            IPv4 Leasing Available Ranges
          </h2>
          <p className="mt-1 text-sm font-semibold text-slate-600">
            ( ARIN, LACNIC, RIPE, AFRINIC, APNIC )
          </p>
          <div className="mt-8 grid w-full gap-4 md:grid-cols-4">
            <div className="flex flex-col rounded-3xl bg-white p-6 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Subnet
              </h3>
              <div className="mt-4 flex-1 divide-y divide-slate-100">
                {["/24", "/23", "/22", "/21", "/20", "/19", "/18", "/17", "/16"].map((subnet) => (
                  <div
                    key={subnet}
                    className="flex items-center justify-center py-2 text-[13px] text-slate-500"
                  >
                    <span>{subnet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                RDNS Delegation
              </h3>
              <div className="mt-4 flex-1 divide-y divide-slate-100">
                {["/24", "/23", "/22", "/21", "/20", "/19", "/18", "/17", "/16"].map((subnet) => (
                  <div
                    key={subnet}
                    className="flex items-center justify-center py-2 text-[13px] text-slate-500"
                  >
                    <span>Yes</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                GEOIP
              </h3>
              <div className="mt-4 flex-1 divide-y divide-slate-100">
                {["/24", "/23", "/22", "/21", "/20", "/19", "/18", "/17", "/16"].map((subnet) => (
                  <div
                    key={subnet}
                    className="flex items-center justify-center py-2 text-[13px] text-slate-500"
                  >
                    <span>Yes</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-3xl bg-white p-6 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                LOA
              </h3>
              <div className="mt-4 flex-1 divide-y divide-slate-100">
                {["/24", "/23", "/22", "/21", "/20", "/19", "/18", "/17", "/16"].map((subnet) => (
                  <div
                    key={subnet}
                    className="flex items-center justify-center py-2 text-[13px] text-slate-500"
                  >
                    <span>Yes</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-1 text-[11px] leading-relaxed text-slate-500">
            <p>
              <span className="font-semibold">*Note:</span> Strictly no email marketing on the above offers; for email
              marketing, please{" "}
              <a href="/contact" className="underline">
                contact us for pricing.
              </a>
            </p>
            <p>
              <span className="font-semibold">**</span>The prices shown above are for yearly prepayments. Get in touch for
              monthly, quarterly, or semi-annual plans, and we'll fill you in on the rates.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Lease IPv4 Addresses with Confidence at a Fair Price
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Whether you need temporary capacity for a migration, seasonal peak traffic, or a long-running project, IPv4
              leases give you flexibility without tying up capital. We help you structure terms that fit your timelines and
              technical requirements.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our brokerage desk vets address space for routing reputation and policy alignment so you can integrate leased
              blocks into your network with confidence.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/network-equipment.png"
                    alt="Network planning displayed on digital interfaces"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="order-2 flex-1 md:order-1">
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Business professional working on laptop in modern office"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 flex-1 space-y-4 md:order-2">
            <h2 className="text-2xl font-semibold text-slate-900">
              IPv4 Lease for Short- and Long-Term Use
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Some projects only need additional addresses for a defined window. Others require capacity for years, but still
              prefer an operating expense model. We support both short- and longer-term leases, aligned with your business
              plans.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We work with you on renewal options, exit timing, and technical cutovers so the end of a lease is as smooth as
              the start.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              The Benefits of Letting Us Assist with IPv4 Rental
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We actively manage both sides of the leasing relationship, helping lessors place their space with trustworthy
              operators while giving lessees access to vetted, well-documented prefixes.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our team coordinates paperwork, escrow when required, and ongoing communication so you always have a single
              point of contact for anything related to your lease.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Professional using a tablet to manage network services"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="order-2 flex-1 md:order-1">
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Team working together on infrastructure planning"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 flex-1 space-y-4 md:order-2">
            <h2 className="text-2xl font-semibold text-slate-900">
              How We Get It Done
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              From initial requirements gathering through prefix handoff, we follow a structured process that keeps both
              parties aligned. That includes documented terms, clear responsibilities, and transparent communication.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We stay involved after go-live to help address routing questions, abuse contacts, and any RIR considerations
              that arise during the life of the lease.
            </p>
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
                  Share your leasing needs, preferred regions, term length, and any technical constraints. We will respond
                  with tailored options and next steps.
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
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="phone"
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
                    name="company"
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                    placeholder="Your organization"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  IPv4 range you want to lease
                </p>
                <div className="grid gap-2 text-xs sm:grid-cols-3">
                  {["/17", "/18", "/19", "/20", "/21", "/22", "/23", "/24", "Other"].map((range) => (
                    <label
                      key={range}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400"
                    >
                      <input
                        type="radio"
                        name="lease-range"
                        value={range}
                        className="h-3 w-3 rounded-full border-slate-500 bg-slate-900"
                      />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Preferred term
                </p>
                <div className="grid gap-2 text-xs sm:grid-cols-3">
                  {['1-3 months', '3-12 months', '12+ months'].map((term) => (
                    <label
                      key={term}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400"
                    >
                      <input
                        type="radio"
                        name="lease-term"
                        value={term}
                        className="h-3 w-3 rounded-full border-slate-500 bg-slate-900"
                      />
                      <span>{term}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Share any details about your project, preferred regions, and timelines."
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
                  By submitting this form you agree that we may contact you about IPv4 services in accordance with our standard
                  privacy practices.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
