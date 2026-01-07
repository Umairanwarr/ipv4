"use client";

import { useState } from "react";
import Image from "next/image";

export default function SellingIPv4ToUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage("Form submitted successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              alt="City skyline representing global connectivity"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/75" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 text-white lg:px-0">
            <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Selling IPv4 Addresses to Us
            </h1>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4 text-sm leading-relaxed text-slate-600">
            <h2 className="text-lg font-semibold text-slate-900">How We Work with IPv4 Sellers</h2>
            <p>
              Whether you hold legacy space or recently allocated ranges, selling IPv4 blocks requires careful planning,
              clear documentation, and a trusted counterparty. We help you realize the value of your addresses while
              protecting your reputation and minimizing operational risk.
            </p>
            <p>
              Our team evaluates your ranges, advises on pricing, and presents offers from vetted buyers. We coordinate the
              full transfer process, from initial interest through registry updates and payment release.
            </p>
            <p>
              You stay in control of which offers to accept while we manage the details, ensuring each step is transparent
              and fully documented.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Person pointing at a digital dashboard"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-6xl px-4 lg:px-0">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-red-600 ring-1 ring-inset ring-red-600/20 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest">Process</span>
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 sm:text-4xl">
              Monetize Your Assets
            </h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto font-medium">
              A secure, maximized value pathway for selling your IPv4 address space.
            </p>
          </div>

          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="absolute left-1/2 top-4 bottom-4 -ml-px w-0.5 bg-gradient-to-b from-slate-200 via-slate-200 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 md:text-right">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-white/50 opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
                    <div className="relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                      <div className="text-6xl font-black text-slate-50/80 absolute -top-4 -right-4 select-none z-0">01</div>
                      <h3 className="text-xl font-bold text-slate-900 relative z-10 mb-2">NDA Sign</h3>
                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 font-medium">
                        We sign an NDA (non-disclosure agreement) so discussions stay confidential.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 hidden md:flex z-10">
                  <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                </div>

                <div className="w-full md:w-1/2 md:pl-16 hidden md:block" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 hidden md:block" />

                {/* Marker */}
                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 hidden md:flex z-10">
                  <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                </div>

                <div className="w-full md:w-1/2 md:pl-16 md:text-left">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-white/50 opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
                    <div className="relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                      <div className="text-6xl font-black text-slate-50/80 absolute -top-4 -left-4 select-none z-0">02</div>
                      <h3 className="text-xl font-bold text-slate-900 relative z-10 mb-2">Negotiation</h3>
                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 font-medium">
                        Seller shares IPv4 ranges and goals. We discuss reasonable market pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 md:text-right">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-white/50 opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
                    <div className="relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                      <div className="text-6xl font-black text-slate-50/80 absolute -top-4 -right-4 select-none z-0">03</div>
                      <h3 className="text-xl font-bold text-slate-900 relative z-10 mb-2">Offering</h3>
                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 font-medium">
                        We share offers from pre-qualified buyers that match your preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 hidden md:flex z-10">
                  <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                </div>

                <div className="w-full md:w-1/2 md:pl-16 hidden md:block" />
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 hidden md:block" />

                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 hidden md:flex z-10">
                  <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                </div>

                <div className="w-full md:w-1/2 md:pl-16 md:text-left">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-white/50 opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
                    <div className="relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                      <div className="text-6xl font-black text-slate-50/80 absolute -top-4 -left-4 select-none z-0">04</div>
                      <h3 className="text-xl font-bold text-slate-900 relative z-10 mb-2">Agreement</h3>
                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 font-medium">
                        Once a deal is selected, we sign a formal sale and transfer agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 md:text-right">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-white/50 opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
                    <div className="relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                      <div className="text-6xl font-black text-slate-50/80 absolute -top-4 -right-4 select-none z-0">05</div>
                      <h3 className="text-xl font-bold text-slate-900 relative z-10 mb-2">Escrow</h3>
                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 font-medium">
                        Funds are secured in escrow or a trusted payment channel before transfer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 hidden md:flex z-10">
                  <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                </div>

                <div className="w-full md:w-1/2 md:pl-16 hidden md:block" />
              </div>

              {/* Step 6 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-16 hidden md:block" />

                <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 hidden md:flex z-10">
                  <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                </div>

                <div className="w-full md:w-1/2 md:pl-16 md:text-left">
                  <div className="relative group">
                    <div className="absolute -inset-4 rounded-3xl bg-white/50 opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
                    <div className="relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(15,23,42,0.1)] hover:-translate-y-1">
                      <div className="text-6xl font-black text-slate-50/80 absolute -top-4 -left-4 select-none z-0">06</div>
                      <h3 className="text-xl font-bold text-slate-900 relative z-10 mb-2">Payment</h3>
                      <p className="text-slate-600 leading-relaxed text-sm relative z-10 font-medium">
                        Seller gets paid once the transfer is approved and completed.
                      </p>
                    </div>
                  </div>
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
                  Kindly fill the form below and our IPv4 sales specialist will contact you.
                </h2>
                <p className="text-sm text-slate-200">
                  Share your available ranges, RIR region, and preferred timelines. We'll respond with a clear proposal and
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

            <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-slate-900/80 p-8 shadow-xl">
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
                  I want to
                </p>
                <div className="grid gap-2 text-xs sm:grid-cols-3">
                  {[
                    "Sell IPv4",
                    "Lease IPv4",
                    "Discuss options",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400"
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={item}
                        className="h-3 w-3 rounded-full border-slate-500 bg-slate-900 text-sky-400 focus:ring-sky-400"
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
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Share any details about your IPv4 ranges, regions, and expectations."
                />
              </div>
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-colors md:w-auto ${isSuccess
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                      }`}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : isSuccess
                        ? "Submitted"
                        : "Submit"}
                  </button>
                  {message && (
                    <p
                      className={`text-center md:text-left ${isSuccess ? "text-green-400" : "text-red-400"
                        }`}
                    >
                      {message}
                    </p>
                  )}
                </div>
                <p>
                  By submitting this form you agree that we may contact you about IPv4 sales and brokerage services in
                  accordance with our standard privacy practices.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
