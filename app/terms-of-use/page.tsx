import { Header } from "@/components/Header";
import Image from "next/image";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <section className="relative h-60 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0ea5e9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#ef4444_0,_transparent_55%)] opacity-40" />
          <div className="relative z-10">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">Terms of Use</h1>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl px-4 lg:px-0">
          <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-a:text-red-600 hover:prose-a:text-red-700">
            <p className="text-sm text-slate-500 mb-8">Last updated on October 12, 2025</p>
            
            <p className="mb-6 text-slate-700">
              IPv4Premium Ltd. (“IPv4Premium”, “we”, or “us” and “our”) owns and operates the website, www.ipv4mall.com, (hereinafter, “Site”). By (a) using the Site and IPv4Premium’s services through the Site, (b) signing up for an account and/or (c) completing a purchase on the Site, you agree to these Terms of Use (defined below) and any additional terms applicable to certain programs in which you may elect to participate. You also agree to our Privacy Statement, incorporated herein by reference and acknowledge that you will regularly visit the Terms of Use (defined below) to familiarize yourself with any updates. The Privacy Statement, together with these terms of use, and any other terms contained herein or incorporated herein by reference, are collectively referred to as the “Terms of Use”.
            </p>

            <h2 className="text-xl mt-10 mb-4">OWNERSHIP OF THE SITE</h2>
            <p className="mb-6 text-slate-700">
              The Site, any content on the Site, and the infrastructure used to provide the Site are proprietary to us. By using the Site and accepting these Terms of Use: (a) IPv4Premium grants you a limited, personal, non-transferable, non-exclusive, revocable license to use the Site pursuant to these Terms of Use and to any additional terms and policies set forth by us; and (b) you agree not to reproduce, distribute, create derivative works from, publicly display, publicly perform, license, sell, or re-sell any content, software, products, or services obtained from or through the Site without our express permission.
            </p>

            <h2 className="text-xl mt-10 mb-4">MODIFICATION</h2>
            <p className="mb-6 text-slate-700">
              IPv4Premium reserves the right at all times to discontinue or modify any part of these Terms of Use in its sole discretion. If we make changes that affect your use of the Site or our services, we will post notice of the change on the Terms of Use page. Any changes to these Terms of Use will be effective upon our posting of the notice, provided that these changes will be prospective only and not retroactive. If you do not agree to the changes, you may close your account and you should not use the Site or any services offered through the Site after the effective date of the changes. We suggest that you revisit our Terms of Use regularly to ensure that you stay informed of any changes. You agree that posting notice of any changes on the Terms of Use page is adequate notice to advise you of these changes, and that your continued use of the Site or our services will constitute acceptance of these changes and the Terms of Use as modified.
            </p>

            <h2 className="text-xl mt-10 mb-4">ACCOUNT SETUP</h2>
            <p className="mb-6 text-slate-700">
              It is your responsibility to provide us with a valid and reachable email address. If there is ever an abuse issue or we need to contact you, the primary email address on file will be used for this purpose. It is your responsibility to ensure the email address on file is current or up to date at all times and your spam filtering system is not filtering our emails as spam. It is your responsibility to ensure that the contact information for your account is correct and up-to-date. We shall not be held liable for lapsed registration due to outdated contact information being associated with the service.
            </p>

            <h2 className="text-xl mt-10 mb-4">USE OF THE SITE</h2>
            <p className="mb-4 text-slate-700">As a condition of your use of the Site, you agree that:</p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>You have reached the age of majority in the Country in which you reside;</li>
              <li>You are able to create a binding legal obligation;</li>
              <li>You are not barred from receiving products or services under applicable law;</li>
              <li>You will not attempt to use the Site with crawlers, robots, data mining, or extraction tools or any other functionality;</li>
              <li>Your use of the Site will at all times comply with these Terms of Use and all applicable law;</li>
              <li>You have the right to provide any and all information you submit to the Site, and all such information is accurate, true, current, and complete;</li>
              <li>You will update and correct information you have submitted to the Site, including all account information, and ensure that it is accurate at all times (out-of-date information will invalidate your account); and,</li>
            </ul>

            <p className="mb-4 text-slate-700">As a condition of your use of the Site, you agree that:</p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>IRCD (irc servers)</li>
              <li>IRC Scripts/Bots</li>
              <li>Pirated Software/Warez</li>
              <li>IP Scanners</li>
              <li>Ad Click Bots</li>
              <li>Ad Fraud Activity</li>
              <li>Bruteforce Programs/Scripts/Applications</li>
              <li>Mail Bombers/spam Scripts</li>
              <li>Escrow</li>
              <li>High-Yield Interest Programs (HYIP) or Related Sites</li>
              <li>Investment Sites (FOREX, E-Gold Exchange, Second Life/Linden Exchange, Ponzi, MLM/Pyramid Scheme)</li>
              <li>Sale of any controlled substance without prior proof of appropriate permit(s)</li>
              <li>Prime Banks Programs</li>
              <li>Lottery Sites</li>
              <li>Hateful/Racist/Harassment oriented sites</li>
              <li>Hacker focused sites/archives/programs</li>
              <li>Sites promoting illegal activities</li>
              <li>Forums and/or websites that distribute or link to warez/pirated/illegal content</li>
              <li>Bank Debentures/Bank Debenture Trading Programs</li>
              <li>Fraudulent Sites (Including, but not limited to sites listed at aa419.org &amp; escrow-fraud.com)</li>
              <li>Mailer Pro</li>
              <li>and any other illegal activity.</li>
            </ul>

            <p className="mb-6 font-semibold text-slate-900 uppercase">
              YOU AGREE TO INDEMNIFY AND HOLD HARMLESS IPV4PREMIUM FROM ANY CLAIMS RESULTING FROM THE USE OF OUR SITE AND SERVICES.
            </p>

            <p className="mb-6 text-slate-700">
              You hereby agree to not use our Site and Services to infringe upon any copyright or trademark is prohibited. This includes but is not limited to unauthorized copying of music, books, photographs, or any other copyrighted work. The offer of sale of any counterfeit merchandise of a trademark holder or performing any other sort of illegal activity including breaking any parties’ rights will result in the immediate termination of your account with no refund provided. Any account found to be in violation of another’s copyright will be expeditiously removed, or access to the material disabled. Any account found to be in repeated violation of copyright laws will be suspended and/or terminated from our hosting. If you believe that your copyright, trademarks or your rights are being infringed upon, please email service provider at abuse info@ipv4mall.net with the information required. A list of required information may be found here. If the request is of a licensing issue, we may require further documentation. In the event of a copyright, trademark or patent infringement by the use of our services by you, you hereby agree that you will rectify the situation within 48 hours after receiving a notice, in whichever form that it may take, of such infringement.
            </p>

            <h2 className="text-xl mt-10 mb-4">PAYMENT POLICY – RENEWAL – CANCELLATION</h2>
            <p className="mb-4 text-slate-700">
              You agree to supply appropriate payment for the services received from IPv4Premium, in advance of the time period during which such services are provided.
            </p>
            <p className="mb-4 text-slate-700">
              You hereby agree that in order to renew your services with us, you must do so before the due date. In the event that you have not given us your intent to renew before such date, we may, at our sole discretion, suspend and/or terminate your services with us. You shall hold IPv4Premium harmless for all damages such suspension and/or termination causes and understand that it is solely your duty to renew your services with us.
            </p>
            <p className="mb-6 text-slate-700">
              We reserve the right to cancel, suspend, or otherwise restrict access to the account at any time with or without prior notice.
            </p>

            <h2 className="text-xl mt-10 mb-4">DELIVERY OF SERVICE</h2>
            <p className="mb-6 text-slate-700">
              IPv4Premium aims to always deliver all its services in a timely manner and on schedule. You hereby agree and understand that in the event that we fail to deliver your services for reasons such as but not limited to force majeure, time zone differences, speed availability of suppliers, we shall reset your due date to the day that we deliver your services. If for any reason your services become unsuccessful, we will credit you the amount paid back to your account with us and you will be able to use those funds for renewals and new orders.
            </p>

            <h2 className="text-xl mt-10 mb-4">SERVICE</h2>
            <p className="mb-4 text-slate-700">
              IPv4Premium does not offer support on software related matters such as but not limited to VPN software’s, mailing software’s, control panels and scripts. In the event where you have a problem with the above-mentioned subjects, we will try and help you, without any guarantees, and provide you with support to resolve the matter for you (not including your clients).
            </p>
            <p className="mb-4 text-slate-700">
              You hereby understand and agree that if IPv4Premium provides you with tech support outside of its brokerage capacity and such support is successful then we reserve, at our sole discretion, to invoice you for services rendered.
            </p>
            <p className="mb-6 text-slate-700">
              In the event where we have delays setting up your rDNS or providing support we will compensate you within forty-eight (48) hours.
            </p>

            <h2 className="text-xl mt-10 mb-4">TEST SERVICES</h2>
            <p className="mb-6 text-slate-700">
              IPv4Premium provides you with test services on a case-by-case basis. We will not tolerate spamming, backlisting or burning our IP addresses during any of these tests that we may provide you with. You hereby acknowledge that in any case where, at our sole discretion, we see any form of abuse on our test services, we shall blacklist your account on our databases and that of all our partners.
            </p>

            <h2 className="text-xl mt-10 mb-4">ABUSE</h2>
            <p className="mb-4 text-slate-700">
              We take a zero-tolerance stance against sending of unsolicited e-mail and spam. “Safe lists” and purchased lists will be treated as spam. IPv4Premium does authorise the sending of clean mass emails that follow rules set forth in the CAN-SPAM Act.
            </p>
            <p className="mb-4 text-slate-700">
              Any user who has listed IP’s by Spamhaus Block during the testing period will be marked as untrusted on our end and their information may be shared among our business partners.
            </p>
            <p className="mb-4 text-slate-700">
              Any user who has listed IP addresses in active services by serious blacklists during his billing period will have its corresponding services with us terminated without notice and refund of services.
            </p>
            <p className="mb-4 text-slate-700">
              Sites advertised via SPAM (Spamvertised) may not be hosted on our servers and might not use any of our services. This provision includes, but is not limited to SPAM sent via fax, email, instant messaging, or usenet/newsgroups. No organization or entity listed in the ROKSO may be hosted on our servers. Any account which results in our IP space being blacklisted or used for spamming will be immediately suspended and/or terminated with no refund provided.
            </p>
            <p className="mb-4 text-slate-700">
              IPv4Premium reserves the right to require changes or disable as necessary any web site, account, database, or other component that does not comply with its established policies, or to make any such modifications in an emergency at its sole discretion.
            </p>
            <p className="mb-6 text-slate-700">
              IPv4Premium reserves the right to charge the holder of the account used to send any unsolicited e-mail a clean-up fee or any charges incurred for blacklist removal. This cost of the clean-up fee is entirely at our discretion.
            </p>

            <h2 className="text-xl mt-10 mb-4">REFUND POLICY</h2>
            <p className="mb-6 text-slate-700">
              As a standard practice, IPv4Premium shall refund the buyer and/or broker for the IP payment in fourteen (14) days after the payment has been made, if the sale of the IP has not gone through for any reason.
            </p>

            <h2 className="text-xl mt-10 mb-4">INDEMNIFICATION</h2>
            <p className="mb-6 text-slate-700">
              You hereby agree to defend, indemnify, save and hold IPv4Premium harmless from any and all demands, liabilities, losses, costs and claims, including reasonable attorney’s fees asserted against us, our agents, customers, officers and employees, that may arise or result from any service provided or performed or agreed to be performed or any product sold by you, its and/ or your agents, employees or assigns.
            </p>

            <h2 className="text-xl mt-10 mb-4">DISCLOSURE – LIMITATION OF LIABILITY</h2>
            <p className="mb-6 text-slate-700">
              Except as described herein, IPv4Premium shall not be liable to customer for harm caused by or related to customer’s services or inability to utilize the services unless caused by willful misconduct. We shall not be liable to customer for lost profits, indirect, special or incidental, consequential or punitive damages. Notwithstanding anything else in this terms or service agreement, the maximum aggregate liability of service provider and any of its employees, agents or affiliates, under any theory of law should not exceed the amount of fees it has collected on full month of service. Except as otherwise provided in this terms of use agreement, IPv4Premium provides all products and services “as is”, without warranty or any kind, whether express, or implied and disclaims all implied warranties, including but not limited to, the implied warranties of merchantability of fitness for a particular purpose. customer shall be solely responsible for the selection, use, and suitability of any product and service and IPv4Premium shall have no liability associated with the forgoing. customers are responsible for ensuring security of servers.
            </p>

            <h2 className="text-xl mt-10 mb-4">ENTIRE AGREEMENT</h2>
            <p className="mb-6 text-slate-700">
              The Terms of Use including our Privacy Policy constitutes the entire agreement and understanding between you and IPv4Premium with respect to the subject matter hereof and supersedes all prior or contemporaneous communications and proposals, whether oral or written, between you and IPv4Premium with respect to such subject matter.
            </p>

            <h2 className="text-xl mt-10 mb-4">GOVERNING LAW</h2>
            <p className="mb-6 text-slate-700">
              Any disputes arising out of or related to these Terms of Use and/or any use by you of the Site or IPv4Premium’s services shall be governed by the laws of London, without regard to its choice of law rules and without regard to conflicts of laws principles.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 pb-8 pt-16 text-white w-full border-t border-slate-900 mt-auto">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:justify-between lg:px-0">
          <div className="flex flex-col items-start gap-4 md:max-w-xs">
            <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="IPv4Premium" className="h-14 w-auto" />
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold leading-none text-[#0f172a] tracking-tight">Premium</span>
              <span className="text-[13px] font-medium text-slate-500 mt-0.5">Buy &middot; Sell &middot; Lease</span>
            </div>
          </a>
            <p className="text-sm text-slate-400">
              Your trusted partner for secure, compliant, and efficient IPv4
              address transactions globally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Company
              </h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <a href="/about" className="block hover:text-white">
                  About us
                </a>
                <a href="/contact" className="block hover:text-white">
                  Contact
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Services
              </h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <a href="/buy-ipv4" className="block hover:text-white">
                  Buy IPv4
                </a>
                <a href="/sell-ipv4" className="block hover:text-white">
                  Sell IPv4
                </a>
                <a href="/lease-ipv4" className="block hover:text-white">
                  Lease IPv4
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Process
              </h4>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <a href="/buy-ipv4-from-us" className="block hover:text-white">
                  Buying IPv4 From Us
                </a>
                <a href="/sell-ipv4-to-us" className="block hover:text-white">
                  Selling IPv4 to Us
                </a>
                <a href="/lease-ipv4-from-us" className="block hover:text-white">
                  Leasing IPv4 From Us
                </a>
                <a href="/lease-ipv4-to-us" className="block hover:text-white">
                  Leasing IPv4 To Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-4 border-t border-slate-800 px-4 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between lg:px-0">
          <p>
            © {new Date().getFullYear()} IPv4Premium. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/terms-of-use" className="hover:text-white transition-colors">Terms</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
            <span>Status</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
