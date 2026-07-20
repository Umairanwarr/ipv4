"use client";
import { Header } from "@/components/Header";

import { useState } from "react";
import Image from "next/image";

export default function BuyArinIPv4Page() {
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
              Sell, Lease, and Buy IP Address from ARIN
            </h1>
          </div>
        </section>

        <section className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-6 px-4 lg:px-0">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="flex w-full max-w-[200px] flex-col items-center rounded-3xl bg-white p-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:w-auto"
            >
              <div className="mb-4 flex h-16 w-32 items-center justify-center rounded-2xl bg-slate-50">
                <span className="text-sm font-semibold tracking-wide text-slate-800">ARIN</span>
              </div>
              <p className="text-[11px] text-slate-500">IPv4 space in the ARIN region.</p>
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
                    alt="Digital infrastructure in a data center"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">What is ARIN?</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              ARIN is the Regional Internet Registry serving North America and parts of the Caribbean. It manages the
              allocation and registration of IP address resources and ASNs for organizations operating in its service
              region.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Any transfer of IPv4 address space in this region must follow ARIN policies and be properly recorded to keep
              routing information accurate.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="order-2 flex-1 space-y-4 md:order-1">
            <h2 className="text-2xl font-semibold text-slate-900">ARIN's Policy on IP Address Transfers</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              ARIN policy defines who can receive transferred space, how justification works, and what documentation is
              required. The rules can be detailed, especially for inter-RIR transfers.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We translate those requirements into clear steps, prepare the transfer request, and coordinate directly with
              ARIN so you do not have to manage every interaction yourself.
            </p>
          </div>
          <div className="order-1 flex-1 md:order-2">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Engineer reviewing ARIN policy documentation"
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
                    alt="Abstract view of global routing"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">How Can You Access ARIN Resources?</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Organizations can obtain ARIN resources through direct allocation, assignment, or approved transfers. Each path
              has its own requirements and review steps.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We help you choose the most suitable route, prepare supporting material, and handle the paperwork so you can
              focus on running your network.
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
                  Kindly fill the form below and our ARIN specialist will contact you.
                </h2>
                <p className="text-sm text-slate-200">
                  Share details about the ARIN IPv4 space you want to buy, lease, or sell and we will follow up with
                  specific options.
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
                    "Buy ARIN IPv4",
                    "Sell ARIN IPv4",
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
                  placeholder="Share any details about your ARIN requirements, timelines, and regions."
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
                  By submitting this form you agree that we may contact you about ARIN IPv4 services in accordance with our
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
