// export default Contact;
"use client";

import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

function page() {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactForm />
    </div>
  );
}

export default page;
