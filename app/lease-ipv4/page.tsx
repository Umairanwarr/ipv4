"use client";
import { Header } from "@/components/Header";

import { useState } from "react";
import Image from "next/image";

export default function LeaseIPv4Page() {
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
      <Header />

      <main className="pb-20">
        <section className="relative h-72 w-full overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt="Global network nodes connecting continents"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 lg:px-0">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Lease IPv4 Addresses
            </h1>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Flexible IPv4 solutions for immediate growth
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Buying IPv4 space isn't always the right choice for every business model. Leasing provides a flexible, OPEX-friendly alternative that lets you scale up address capacity quickly without a large upfront capital investment.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We connect you with holders of clean, reputation-checked IP blocks who are looking to lease out their excess inventory. Whether you need space for a few months or several years, we structure agreements that work for you.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Row of server racks in a data center"
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
                    alt="Professionals finalizing an IPv4 lease agreement"
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
              Why Lease IPv4 from Us?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Cleanliness and reputation are everything. We thoroughly vet every subnet before it enters our inventory to ensure it isn't blacklisted. This means better deliverability for email, smoother routing for ISPs, and fewer headaches for your engineering team.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our leasing process includes clear LOA (Letter of Authorization) provisioning, ROA (Route Origin Authorization) updates, and ongoing support to ensure your leased IPs are announced correctly.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mt-20 bg-slate-950 py-16 text-white"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:px-0">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22c55e_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e9_0,_transparent_55%)] opacity-40" />
              <div className="relative space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-200">
                  Ready to lease?
                </p>
                <h2 className="text-2xl font-semibold">
                  Tell us about your requirements.
                </h2>
                <p className="text-sm text-slate-200">
                  Let us know how many IPs you need, your preferred RIR region, and lease duration. We'll check our real-time inventory and get back to you with available options.
                </p>
                <div className="mt-6 overflow-hidden rounded-3xl bg-slate-900">
                  <Image
                    src="/images/network-equipment.png"
                    alt="Network technician working on a server rack"
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
                    Your Name
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
                    Email Address
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
                    Contact Number
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
                    Service
                  </label>
                  <input
                    type="text"
                    name="service"
                    value="Lease IPv4"
                    readOnly
                    className="h-10 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 text-sm text-slate-400 outline-none"
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
                        className="h-3 w-3 rounded-full border-slate-500 bg-slate-900 text-sky-400 focus:ring-sky-400"
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
                        className="h-3 w-3 rounded-full border-slate-500 bg-slate-900 text-sky-400 focus:ring-sky-400"
                      />
                      <span>{term}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Tell us about your use case (e.g. ISP, Hosting, Email) and any specific block requirements."
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
                        : "Submit request"}
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
                  By submitting this form you agree that we may contact you about IPv4 services in accordance with our standard privacy practices.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
