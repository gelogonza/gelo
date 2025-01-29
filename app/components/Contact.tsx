"use client";

import { Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-navy to-light-navy text-lightest-slate text-center">
      <h2 className="text-3xl font-bold text-white mb-4">contact</h2>
      <p className="text-lg text-slate mb-6">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <a
        href="mailto:ag38@iu.edu"
        className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium bg-transparent border border-green text-green rounded hover:bg-green hover:text-navy transition"
      >
        <Mail className="w-6 h-6" />
        Email Me!
      </a>
    </section>
  );
};

export default Contact;
