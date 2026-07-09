"use client";

import { useState } from "react";
import Image from "next/image";

export default function BuyApnicIPv4Page() {
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
              Buy and Sell APNIC IPv4 Addresses
            </h1>
          </div>
        </section>

        <section className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-6 px-4 lg:px-0">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="flex w-full max-w-[180px] flex-col items-center rounded-3xl bg-white p-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:w-auto"
            >
              <div className="mb-4 flex h-16 w-28 items-center justify-center rounded-2xl bg-slate-50">
                <span className="text-sm font-semibold tracking-wide text-slate-800">APNIC</span>
              </div>
              <p className="text-[11px] text-slate-500">IPv4 address blocks in the APNIC region.</p>
              <button className="mt-4 rounded-full bg-red-600 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-red-700">
                Details
              </button>
            </div>
          ))}
        </section>

        <section className="mx-auto mt-20 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/network-equipment.png"
                    alt="Engineer working in a modern network operations center"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Who is APNIC?</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              APNIC is the Regional Internet Registry that allocates and manages IP address resources across the Asia-Pacific
              region. Organizations in this region rely on APNIC policy and processes to obtain and transfer IPv4 address
              space.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We help you work within those policies so each transfer is recognized and properly recorded in the registry.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="order-2 flex-1 space-y-4 md:order-1">
            <h2 className="text-2xl font-semibold text-slate-900">APNIC IP Cost</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Pricing for IPv4 space in the APNIC region reflects both scarcity and local demand. We track transaction
              benchmarks so you understand what is reasonable for different block sizes and ranges.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our goal is to help you secure the right space at a fair market price, whether you are buying or selling.
            </p>
          </div>
          <div className="order-1 flex-1 md:order-2">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Digital city network at night"
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
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Engineer reviewing technical documentation"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">National Internet Registries and Transfers</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Some APNIC economies use National Internet Registries (NIRs) to coordinate address space. We help you understand
              when NIRs are involved and how that affects the approval path for transfers.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our brokerage team coordinates with all relevant parties so your deal progresses without unnecessary delays.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="order-2 flex-1 space-y-4 md:order-1">
            <h2 className="text-2xl font-semibold text-slate-900">What is an APNIC IP Transfer?</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              An APNIC IP transfer moves IPv4 resources between organizations, sometimes across economies or other RIRs.
              Transfers must meet policy criteria and be fully documented to avoid future disputes.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We prepare and submit transfer requests on your behalf and keep you informed at every stage.
            </p>
          </div>
          <div className="order-1 flex-1 md:order-2">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Abstraction of IP address movement"
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
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Business negotiation in progress"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">How APNIC Handles Business Transfers</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Business mergers, acquisitions, and restructurings often involve complex IP resource transfers. We work with
              your legal and technical teams to align transaction documents with APNIC requirements.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our job is to ensure that when the business deal closes, your address space is properly reflected in the
              registry.
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
                  Kindly fill the form below and our APNIC specialist will contact you.
                </h2>
                <p className="text-sm text-slate-200">
                  Tell us what you want to achieve in the APNIC region and we'll respond with specific options for buying or
                  selling IPv4 space.
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
                    "Buy APNIC IPv4",
                    "Sell APNIC IPv4",
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
                  placeholder="Share any details about your APNIC requirements, timelines, and regions."
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
                  By submitting this form you agree that we may contact you about APNIC IPv4 services in accordance with our
                  standard privacy practices.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
