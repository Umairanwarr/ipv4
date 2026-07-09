import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-slate-900 flex flex-col">
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
            <a href="/contact" className="hover:text-red-600">
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

      <main className="flex-1 pb-20">
        <section className="relative h-60 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0ea5e9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#ef4444_0,_transparent_55%)] opacity-40" />
          <div className="relative z-10">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">Privacy Policy</h1>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl px-4 lg:px-0">
          <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-a:text-red-600 hover:prose-a:text-red-700">
            <p className="text-sm text-slate-500 mb-8">Last updated on October 2025</p>

            <p className="mb-6 font-semibold text-slate-900 uppercase">
              WE RESPECT YOUR PRIVACY. THIS PRIVACY POLICY WILL EXPLAIN HOW WE COLLECT, USE, STORE, OR SHARE YOUR INFORMATION. WE STRONGLY RECOMMEND YOU TO READ THIS PRIVACY POLICY CAREFULLY. THIS PRIVACY POLICY APPLIES TO YOUR USE OF IPV4PREMIUM.COM (“Website”) AND ALL SERVICES MADE AVAILABLE TO YOU THROUGH THIS WEBSITE. IF YOU FAIL TO READ THE PRIVACY POLICY, YOU WILL NOT BE EXCUSED FROM ANY LIABILITIES ARISING FROM THIS PRIVACY POLICY. WE MAY AMEND THIS PRIVACY POLICY AT ANY TIME AFTER SERVING AT LEAST 14-DAY PRIOR NOTICE.
            </p>

            <h2 className="text-xl mt-10 mb-4">DEFINITIONS:</h2>
            <p className="mb-4 text-slate-700">
              “You”, ‘your’ and “User” refers to any person visiting or using this Website or IPv4Premium Services. “IPv4Premium Services” refers to all and any services provided by IPv4Premium, including Website and any services made available through this website.
            </p>
            <p className="mb-6 text-slate-700">
              “Information” or “User Information” includes personal and non-personal information about the user of this Website and IPv4Premium Services that we collect under this Privacy Policy. “GDPR” refers to General Data Protection Regulation devised by the European Union and may be reviewed here.
            </p>

            <h2 className="text-xl mt-10 mb-4">CONSENT/UPDATE</h2>
            <p className="mb-4 text-slate-700">
              By using our Services through our website, you expressly consent to the collection, use, disclosure and retention of your personal information by us in accordance with this Privacy Policy and our Terms of Use.
            </p>
            <p className="mb-6 text-slate-700">
              We may update this Privacy Policy at any time, with any updates taking effect immediately upon first posting on our Website. We encourage you to review it regularly. All major changes to our Privacy Policy will be announced on our website.
            </p>

            <h2 className="text-xl mt-10 mb-4">CHILDREN PRIVACY</h2>
            <p className="mb-6 text-slate-700">
              At IPv4Premium, we understand the importance of privacy of minor people. This website is not intended to be used by minor. When a user visits and uses any part of this website, his/her information is collected and received by our system. We don’t individually track any user and knowingly collect user Information from the minor visiting and using this website. This website is designed and intended to be used only by adult users. If you have any proof that a minor has used this website and given their information to IPv4Premium, we recommend you to report us the same. We will permanently delete such information from our storage facility. We will not be liable in case any minor uses this website or create user account by pretending to be an adult.
            </p>

            <h2 className="text-xl mt-10 mb-4">PERSONAL INFORMATION WE COLLECT</h2>
            <p className="mb-4 text-slate-700">
              When you visit our website or use IPv4Premium’s Services, we automatically collect data that is transmitted to us by your computer, mobile device or other access devices.
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Information about your interaction with our website and Services, including device ID, device type, location data, computer and connection information, page view statistics, traffic to and from our website, referring URL, advertising data, IP address, and standard web log information; and</li>
              <li>Information collected by our cookies, web beacons and similar tools.</li>
              <li>Information You Provide to Us. We collect and store any information that you provide to us at your account registration, that you enter on our website, or that you provide when you use our Services.</li>
              <li>Information you provide to us when you open an account or register for any of our Services, namely your first and last name, email address, zip code and password; and</li>
              <li>Information from Other Sources. We may receive or collect other information about you from third parties and add it to your Account Information. This information includes demographic data, navigational data, additional contact information, and additional data about you from other sources as permitted by law.</li>
            </ul>

            <p className="mb-4 text-slate-700">
              While you are our customer, we may request you to participate in surveys and market researches wherein you may have to provide other personal information such as..
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Your hobbies or special interests,</li>
              <li>Your gender,</li>
              <li>Your age,</li>
              <li>Any other demographic information or preferences.</li>
            </ul>

            <p className="mb-4 text-slate-700">
              If you need technical support from our customer support department then we may require you to provide us with some technical information about your system so that we may be able to resolve your issues better. Information we may require include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Name of your operating system,</li>
              <li>Extent of its upgrades,</li>
              <li>Software programs being used,</li>
              <li>Details about your internet connection,</li>
              <li>Other pertinent technical information.</li>
            </ul>

            <p className="mb-4 text-slate-700">
              We will also capture certain behavioral details from you when you visit our website so as to create better services and specifically cater to your needs better. Information we may gather include;
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Your IP address,</li>
              <li>Your point of entry,</li>
              <li>The time and duration of your visit,</li>
              <li>Details about your internet connection,</li>
              <li>The time you spent on various pages on the website.</li>
            </ul>

            <p className="mb-4 text-slate-700">
              You agree that we may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>To provide you with access to IPv4Premium’s Services and customer service by email or telephone;</li>
              <li>Send you promotional materials and other communications, including by email;</li>
              <li>Contacting you about special events, contests, surveys and other offers and managing your participation in these activities;</li>
              <li>Prevent, detect and investigate potentially prohibited or illegal activities, fraud and intrusions and ensure compliance with our Terms of Use;</li>
              <li>To customize, evaluate and improve our services and content (including to develop new services, enhance and improve our services, manage our communications and analyze our products);</li>
              <li>Communicate with you via email, telephone, ask you questions about our services in connection with targeted marketing activities, research updates, or for any other purpose as described in this Privacy Policy.</li>
            </ul>

            <h2 className="text-xl mt-10 mb-4">INFORMATION COLLECTION AND PROCESSING</h2>
            <p className="mb-6 text-slate-700">
              As a service provider, IPv4Premium collects, uses, stores, shares and discloses your information for provision of IPv4Premium Services. IPv4Premium Information will only be used for the provision of IPv4Premium Services. IPv4Premium Services stores and uses user information to enable IPv4Premium to provide this website, create your User Account, authenticate you very time you login, distinctly identify user to keep track of your use of IPv4Premium Services, maintains user record, maintain the security of our system, compile statistics, collect location data, enforce our policies and user agreements and applicable laws, know user experience and analyze user preference, and show customized content to User.
            </p>
            <p className="mb-6 text-slate-700">
              If any user does not provide their user information, they will not be able to create their user account. However, such user can visit this website and view publicly accessible content without creating their user account. In case, any person visits this website, we collect IP address and your browser history.
            </p>
            
            <p className="mb-4 text-slate-700">We may disclose your personal information to:</p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Service providers with whom we have an agreement to assist us in providing our Services.</li>
              <li>Certain third parties (such as supervisory authorities, tax authorities, police and other regulatory bodies) if required by law, or in accordance with our Privacy Policy.</li>
              <li>In order to comply with civil obligations or a court order;</li>
              <li>If necessary for the prevention, detection or prosecution of criminal offences, including fraud, theft or prosecution; and</li>
              <li>If necessary to ensure compliance with our regulations or to protect the rights and freedoms of others.</li>
              <li>Information you share with us in connection with our Services.</li>
            </ul>

            <p className="mb-4 text-slate-700">
              We may also share statistical information drawn from market research and surveys that we conduct. The data, if shared, will be used in an aggregate form and not individually.
            </p>
            <p className="mb-6 text-slate-700">
              If you are using IPv4Premium’s Services and accessing our website from a shared computer, we strongly suggest that you log out after each visit. If you do not want the shared computer to remember your usage or information, you must delete any cookies or history of your visits to our website.
            </p>

            <h3 className="text-lg mt-8 mb-4">Transmission of Information</h3>
            <p className="mb-6 text-slate-700">
              Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our website; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
            </p>

            <h2 className="text-xl mt-10 mb-4">SCOPE OF INFORMATION:</h2>
            <p className="mb-6 font-semibold text-slate-900 uppercase">
              THIS PRIVACY POLICY APPLIES TO YOUR INFORMATION COLLECTED IN THE COURSE OF PROVIDING IPv4Premium SERVICES AND DOES NOT APPLY TO ANY INFORMATION THAT A USER MAKES PURBLICLY AVAILABLE OR ACCESSIBLE THROUGH THIS WEBSITE (i.e. publicly viewable reviews, comments, etc). IPv4Premium IS NOT RESPONSIBLE FOR ANY INFORMATION MADE PUBLICLY ACCESSIBLE.
            </p>

            <h2 className="text-xl mt-10 mb-4">PAYMENT INFORMATION:</h2>
            <p className="mb-6 text-slate-700">
              At the time you create your user account, we require you to provide us with your payment method. While users pay for IPv4Premium Services, they should provide certain payment details to third party payment processor through secure communication channel in accordance with the industry standards. In no case IPv4Premium stores or processes your payment details such as any password. All payment information a user enters using a specified form is directly transferred to the third-party payment processor.
            </p>

            <h2 className="text-xl mt-10 mb-4">INFORMATION COLLECTION METHOD:</h2>
            <p className="mb-4 text-slate-700">
              A significant part of your information is provided by you using an online form at the time you create your user account. In addition, IPv4Premium uses technology to obtain and collect your information such as cookies, web beacons and other technologies.
            </p>
            <p className="mb-6 text-slate-700">
              In addition, IPv4Premium automatically collects your IP address, login activity, browsing history, user preference, page to page navigation history and technical information about device and computer.
            </p>

            <h2 className="text-xl mt-10 mb-4">DISCLOSURE AND PROCESSING:</h2>
            <p className="mb-4 text-slate-700">
              IPv4Premium uses, processes, shares and discloses your information only on the need-to know-basis. In ordinary course of business, your information is used and processed through our system. However, in some cases, IPv4Premium may need to use and process your information on an individual basis. In such cases, IPv4Premium permits only trusted members of the staff who are legally bound by a valid agreement (i.e. non-disclosure agreement) to access and process your information.
            </p>
            <p className="mb-6 text-slate-700">
              IPv4Premium discloses your information to any third party if it is reasonably required by the applicable laws of Canada or when IPv4Premium finds it appropriate to disclose your information to check fraudulent or illegal activities to protect our legitimate commercial interests. To the extent provided hereunder, IPv4Premium doesn’t share, transfer, sell, or lease your information with or to any third party.
            </p>

            <h2 className="text-xl mt-10 mb-4">USES OF COOKIES</h2>
            <p className="mb-4 text-slate-700">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the website, you are agreeing to our use of cookies.
            </p>
            <p className="mb-4 text-slate-700">
              A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer’s hard drive.
            </p>
            <p className="mb-6 text-slate-700">
              When you use the IPv4Premium Services on our website, we may place cookies (data files on your phone or mobile device), web beacons (electronic images added to the code of a web page) or similar tools. We use cookies to identify you as a user, to provide you with a better experience on our website, and to ensure regulatory compliance and security on our website. The information collected by our cookies is as set forth above.
            </p>

            <h2 className="text-xl mt-10 mb-4">SECURITY, STORAGE AND TRANSFER:</h2>
            <p className="mb-4 text-slate-700">
              This Website is hosted and operated from our facilities located in the Netherlands and are subject to the laws of the Netherlands. The Netherlands data protection laws provide strict data protection which is substantially equal to or more than that provided by the applicable laws of Canada. The hosting servers are owned and controlled by third party provider. Such third-party provider uses your information only to the extent necessary for the storage and doesn’t process, use and transfer the same for any other purposes.
            </p>
            <p className="mb-4 text-slate-700">
              In case at any stage, IPv4Premium needs to transfer your information from one third party providers to another or even from one jurisdiction to another jurisdiction, such transfer shall not be made to any jurisdiction the laws of which provide less protection to your information than that of Canada. If you are accessing this Website from EEC member countries and/or are resident thereof, you have special rights and privileges under the data protection laws devised by the European Union such as the General Data Protection Regulation (GDPR).
            </p>
            <p className="mb-4 text-slate-700">
              IPv4Premium uses its best efforts and employs physical, administrative and technology-based measures and practices matching the industry standards to protect your information against any illegal and unauthorized access, breach, disclosure, misuse, alteration, theft, destruction, copy or process (“Illegal Access”). However, the transmission, processing and storage of data over the internet are not always 100% safe. IPv4Premium cannot guarantee that IPv4Premium is completely safe and secure. In case at any stage, your information becomes subject to Illegal Access by any third party or by accidental omission, you acknowledge that IPv4Premium is not responsible for any loss or damage caused by any such Illegal Access. The use of IPv4Premium involves risk to which you assume with full knowledge and consent.
            </p>
            <p className="mb-6 text-slate-700">
              IPv4Premium retains your information as long as IPv4Premium reasonably needs the same for provision of IPv4Premium Services, or as long as you cancel your user account or request IPv4Premium, as hereinafter provided, to erase your information from IPv4Premium system.
            </p>

            <h2 className="text-xl mt-10 mb-4">GDPR AND EEA USER’S RIGHTS:</h2>
            <p className="mb-4 text-slate-700">
              GDPR holds IPv4Premium responsible to use your information for the legitimate purpose. IPv4Premium represents that it will only use your information for a legitimate purpose recognized in the GDPR.
            </p>
            <p className="mb-4 text-slate-700">
              If you are resident or citizen of EEA member country (“EEA User”), you may use any of the rights and discretions defined by the GDPR (EU directives 2016/679) and other applicable laws. Under GDPR, being an EEA User, you may:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
              <li>Access your information;</li>
              <li>Rectify your information;</li>
              <li>Erase your information;</li>
              <li>Transfer your information from IPv4Premium to another service provider or entity which you may specify in writing;</li>
              <li>Request us to provide you with details as to how IPv4Premium is using your information;</li>
              <li>Request IPv4Premium to stop using your information;</li>
              <li>Withdraw your consent to use your information that you have given to us at the time of signup or otherwise. Such withdrawal of consent will not amount to withdrawal ab-initio.</li>
            </ul>
            <p className="mb-6 text-slate-700">
              EEA User may contact us to make any query or request at any time at info@ipv4premium.com
            </p>

            <h2 className="text-xl mt-10 mb-4">CHANGE OF OWNERSHIP AND POLICIES:</h2>
            <p className="mb-6 text-slate-700">
              If the ownership or control over IPv4Premium is transferred or sold, the successor will be bound to comply with the current commitments and contractual obligations or terminate the same by following lawful procedure. In the event of ownership transfer and change of any part of privacy practices, IPv4Premium will give its current user a prior notice and sufficient opportunity to decide whether it is safe to use IPv4Premium under the changed policies and terms.
            </p>

            <h2 className="text-xl mt-10 mb-4">GOVERNING LAWS AND DISPUTE RESOLUTION:</h2>
            <p className="mb-4 text-slate-700">
              This Privacy Policy shall be governed by and construed in accordance with the Laws and Regulations of the province of Quebec, Canada.
            </p>
            <p className="mb-6 text-slate-700">
              You agree to not commence any proceedings against IPv4Premium in relation to any dispute without first giving us a formal notice, setting out the nature of the dispute and full particulars (“Dispute Notice”), together with relevant supporting documentation, provided the right to issue proceedings is not prejudiced by a delay. If such dispute is not amicably resolved between us within 10 Business Days, after receipt of the Dispute Notice, you shall be entitled to refer the dispute to the applicable courts of the province of Quebec, Canada.
            </p>

            <h2 className="text-xl mt-10 mb-4">NOTICE</h2>
            <p className="mb-6 text-slate-700">
              All queries, notices, or requests under this Privacy Policy may be made through: info@ipv4premium.com
            </p>

          </div>
        </section>
      </main>

      <footer className="bg-slate-950 pb-8 pt-16 text-white w-full border-t border-slate-900 mt-auto">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:justify-between lg:px-0">
          <div className="flex flex-col items-start gap-4 md:max-w-xs">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-auto px-2 items-center justify-center rounded-xl bg-red-600 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                IPv4
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-white">
                  Premium
                </span>
                <span className="text-[11px] text-slate-400">
                  Buy · Sell · Lease
                </span>
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
