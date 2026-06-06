import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeInvoice – Time Tracking & Automatic Invoice Generation",
  description: "Track time per client and project, automatically generate invoices with time breakdowns, and send payment reminders. Built for freelance developers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="52cded06-bfc0-41d1-bccd-e66dc8cc808c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
