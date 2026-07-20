"use client";
import { Header } from "@/components/Header";

import { useState } from "react";
import Image from "next/image";

export default function BuyIPv4Page() {
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
              alt="Abstract city skyline representing global connectivity"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 lg:px-0">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Buy IPv4 Addresses
            </h1>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Let IPv4Premium Simplify Your IPv4 Address Needs
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              The growing demand for IPv4 addresses has made it harder than ever to secure clean, routable space. IPv4Premium helps operators, cloud providers, and enterprises source address blocks without the uncertainty of informal channels.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Whether you need a single /24 or multiple /16s, we coordinate every stage of the transaction from matching supply and demand, to escrow, to RIR submission so you can stay focused on running your network.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Professional reviewing IPv4 address requirements on a digital tablet"
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
                    src="/images/network-equipment.png"
                    alt="Engineer configuring network infrastructure"
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
              Why Buy IPv4 Addresses From IPv4Premium?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              IPv4Premium brings together vetted sellers, transparent pricing, and a transaction framework that has been refined across many successful transfers. We focus on due diligence and reputation so that you receive address space you can rely on.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Our team coordinates legal review, escrow, and RIR documentation while keeping you updated at every step. You gain predictable timelines and clear expectations instead of surprises.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center lg:px-0">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Why Choose IPv4Premium?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Many brokers simply introduce buyers and sellers and step aside. We stay engaged from the first conversation through final RIR approval, helping you navigate policy, routing, and operational considerations.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              With experience across ARIN, RIPE, APNIC, AFRINIC, and LACNIC, we anticipate common issues in cross-region transfers and proactively address them, saving your team time and rework.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md rounded-[40px] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <div className="overflow-hidden rounded-[32px] bg-slate-200">
                  <Image
                    src="/images/business-meeting.png"
                    alt="Team collaborating over network strategy"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
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
                  Share what kind of IPv4 space you are looking for, preferred regions, and timelines. We will review your request and follow up with options tailored to your needs.
                </p>
                <div className="mt-6 overflow-hidden rounded-3xl bg-slate-900">
                  <Image
                    src="/images/server-corridor.png"
                    alt="Row of illuminated server racks in a modern data center"
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
                    Service
                  </label>
                  <select name="service" className="h-10 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 text-sm text-white outline-none focus:border-sky-400">
                    <option value="Buy IPv4">Buy IPv4</option>
                    <option value="Sell IPv4">Sell IPv4</option>
                    <option value="Lease IPv4">Lease IPv4</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  IPv4 range you are interested in
                </p>
                <div className="grid gap-2 text-xs sm:grid-cols-3">
                  {["/17", "/18", "/19", "/20", "/21", "/22", "/23", "/24", "Other"].map((range) => (
                    <label
                      key={range}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 hover:border-sky-400"
                    >
                      <input
                        type="radio"
                        name="range"
                        value={range}
                        className="h-3 w-3 rounded-full border-slate-500 bg-slate-900 text-sky-400 focus:ring-sky-400"
                      />
                      <span>{range}</span>
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
