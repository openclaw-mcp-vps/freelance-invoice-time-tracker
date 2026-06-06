export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff22] text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Freelancers & Consultants
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Time Tracking with<br />
          <span className="text-[#58a6ff]">Automatic Invoice Generation</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Track hours per client and project. Generate professional PDF invoices instantly. Send automated payment reminders — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Free Trial — $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to start</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">⏱</div>
            <div className="text-white font-semibold text-sm">Time Tracking</div>
            <div className="text-[#8b949e] text-xs mt-1">Per client & project</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">📄</div>
            <div className="text-white font-semibold text-sm">PDF Invoices</div>
            <div className="text-[#8b949e] text-xs mt-1">Auto-generated instantly</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">🔔</div>
            <div className="text-white font-semibold text-sm">Reminders</div>
            <div className="text-[#8b949e] text-xs mt-1">Automated follow-ups</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited clients & projects",
              "Automatic PDF invoice generation",
              "Time breakdown on every invoice",
              "Automated payment reminders",
              "Export to CSV",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does automatic invoice generation work?",
              a: "Once you stop a timer, your tracked time is logged. When you're ready to bill, click Generate Invoice and a professional PDF is created with a full time breakdown — no manual entry needed."
            },
            {
              q: "Can I track time for multiple clients?",
              a: "Yes. You can create unlimited clients and projects, assign hourly rates per project, and keep all your time logs organized separately."
            },
            {
              q: "What are payment reminders?",
              a: "After sending an invoice, the app automatically follows up with your client via email if payment hasn't been received after your chosen number of days."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} TimeInvoice. Built for freelancers.
      </footer>
    </main>
  );
}
