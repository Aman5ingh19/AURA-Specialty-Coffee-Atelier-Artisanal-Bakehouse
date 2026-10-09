"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  Calendar,
  Users,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Navigation,
  Car,
  Bike,
  Sparkles,
} from "lucide-react";
import { CAFE_INFO } from "@/data/cafeData";
import { CAFE_IMAGES } from "@/data/images";

const FAQS = [
  {
    q: "Do you accept walk-ins for coffee and pastries?",
    a: "Absolutely! The majority of our seating is reserved for walk-in guests throughout the day. Table reservations are primarily intended for parties of 4 or more, weekend brunch groups, or private coffee cuppings.",
  },
  {
    q: "Is there Wi-Fi and laptop-friendly seating?",
    a: "We cherish a balanced, conversational atmosphere. High-speed guest Wi-Fi and designated laptop seating with power outlets are available Monday through Friday from 07:00 to 14:00. On weekends, we embrace unplugged mornings and slow conversation.",
  },
  {
    q: "Are pets allowed?",
    a: "Well-behaved dogs on leashes are warmly welcomed in our outdoor heated cedar patio. We have fresh water bowls and house-baked peanut butter oat treats for four-legged regulars.",
  },
  {
    q: "Can I buy whole-bean bags and have them ground?",
    a: "Yes! All our seasonal micro-lots are available in 250g and 1kg bags, roasted within the last 7 days. Our baristas can grind your beans on our Mahlkönig EK43 for V60, Aeropress, French Press, or home espresso.",
  },
  {
    q: "Where should I park?",
    a: "Street parking is available along NW 10th and NW 11th Avenues. Additionally, there is a covered public parking garage located directly across on NW Flanders St.",
  },
];

export default function VisitPageClient() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "10:00",
    partySize: "2",
    inquiryType: "table",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = "Please provide a valid contact phone number.";
    }
    if (!formData.date) {
      errors.date = "Please select a preferred date.";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const randomRef = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(randomRef);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream-200 text-espresso-950 pb-28">
      {/* Editorial Hero with Storefront Atmosphere */}
      <section className="relative pt-10 pb-16 sm:pb-24 bg-cream-100 border-b border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-caramel-700 font-semibold">
                <MapPin className="w-4 h-4 text-caramel-600" />
                <span>Portland, Oregon • Pearl District</span>
              </div>

              <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl text-espresso-950 font-normal leading-[1.05]">
                Visit the Atelier
              </h1>

              <p className="text-base sm:text-lg text-espresso-750 font-light leading-relaxed max-w-xl">
                Located at 42 Heritage Roastery Lane, just steps from the Portland
                Streetcar. Join us for a quiet morning brew, pick up fresh whole-bean
                micro-lots, or reserve a table for group brunch.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-espresso-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  <strong>Today:</strong> Open 07:00 – 18:00 • Walk-in seating available
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-subtle group">
                <Image
                  src={CAFE_IMAGES.pageHeroes.visit.src}
                  alt={CAFE_IMAGES.pageHeroes.visit.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50 text-xs font-serif italic">
                  42 Heritage Roastery Lane • Outdoor patio & espresso bar
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location, Hours, Transit */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address & Direct Map CTA */}
            <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-subtle shadow-soft space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-caramel-700 block">
                Atelier Location
              </span>

              <div>
                <h3 className="font-serif text-2xl font-bold text-espresso-950">
                  {CAFE_INFO.fullName}
                </h3>
                <p className="text-sm text-espresso-800 mt-1">
                  {CAFE_INFO.address.street}
                </p>
                <p className="text-sm text-espresso-600">
                  {CAFE_INFO.address.district}, {CAFE_INFO.address.city}, {CAFE_INFO.address.state} {CAFE_INFO.address.zip}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={CAFE_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-espresso-950 hover:bg-caramel-600 text-cream-50 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-sm"
                >
                  <span>Open Directions in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-caramel-400" />
                </a>
              </div>
            </div>

            {/* Hours Schedule */}
            <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-subtle shadow-soft space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-caramel-700">
                <Clock className="w-4 h-4 text-caramel-600" />
                <span>Operating Hours</span>
              </div>

              <div className="space-y-3">
                {CAFE_INFO.hours.map((item, idx) => (
                  <div key={idx} className="border-b border-subtle pb-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between text-espresso-900 font-medium">
                      <span>{item.days}</span>
                      <span className="font-mono font-semibold">{item.time}</span>
                    </div>
                    <span className="text-[11px] text-espresso-500 block mt-0.5">
                      {item.notes}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-subtle shadow-soft space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-caramel-700 block">
                Direct Inquiries
              </span>

              <div className="space-y-2 text-xs sm:text-sm">
                <a
                  href={`tel:${CAFE_INFO.contact.phone}`}
                  className="flex items-center gap-3 text-espresso-800 hover:text-caramel-600 transition-colors p-2 rounded-lg hover:bg-cream-100"
                >
                  <Phone className="w-4 h-4 text-caramel-600 shrink-0" />
                  <span>Call Atelier: {CAFE_INFO.contact.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${CAFE_INFO.contact.email}`}
                  className="flex items-center gap-3 text-espresso-800 hover:text-caramel-600 transition-colors p-2 rounded-lg hover:bg-cream-100"
                >
                  <Mail className="w-4 h-4 text-caramel-600 shrink-0" />
                  <span>Email: {CAFE_INFO.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Transit and Parking Guide */}
            <div className="bg-cream-100 p-6 rounded-2xl border border-subtle space-y-3 text-xs text-espresso-750">
              <h4 className="font-serif text-base font-semibold text-espresso-950 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-caramel-600" />
                <span>Getting Here</span>
              </h4>
              <p>
                <strong>Streetcar:</strong> Portland Streetcar NS Line stops at NW 10th & Glisan, a 2-minute stroll away.
              </p>
              <p>
                <strong>Bicycle:</strong> Covered bike corrals are situated right beside our outdoor heated courtyard.
              </p>
              <p>
                <strong>Parking:</strong> Metered 2-hour parking on Heritage Lane and Flanders St.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Table & Tasting Inquiry Form */}
          <div id="reservations" className="lg:col-span-7">
            <div className="bg-cream-50 p-8 sm:p-10 rounded-3xl border border-subtle shadow-card">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-caramel-700 font-semibold mb-2">
                  <Calendar className="w-4 h-4 text-caramel-600" />
                  <span>Table Inquiries & Private Tastings</span>
                </div>
                <h2 className="font-editorial-heading text-3xl sm:text-4xl text-espresso-950 font-normal">
                  Reserve Your Experience
                </h2>
                <p className="text-xs sm:text-sm text-espresso-600 font-light mt-1">
                  We welcome walk-ins anytime. For parties of 4+, cuppings, or weekend brunch, submit an inquiry below.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-cream-100 border border-caramel-500/40 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-caramel-500/20 text-caramel-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-caramel-700 font-bold block mb-1">
                      Inquiry Received • Ref #{referenceId}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-espresso-950">
                      Thank you, {formData.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-espresso-750 font-light mt-2 max-w-md mx-auto leading-relaxed">
                      We have noted your request for a party of {formData.partySize} on{" "}
                      <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                      Our floor host will review table availability and send a personal confirmation to{" "}
                      <strong>{formData.email}</strong> within 2 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cream-50 border border-subtle text-xs text-espresso-600 text-left max-w-md mx-auto space-y-1">
                    <p>
                      <strong>Inquiry Type:</strong>{" "}
                      {formData.inquiryType === "table"
                        ? "Table Reservation"
                        : formData.inquiryType === "cupping"
                        ? "Private Cupping & Tasting"
                        : "Group Brunch Event"}
                    </p>
                    {formData.notes && (
                      <p>
                        <strong>Notes:</strong> {formData.notes}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        time: "10:00",
                        partySize: "2",
                        inquiryType: "table",
                        notes: "",
                      });
                    }}
                    className="text-xs font-semibold text-caramel-700 hover:text-caramel-800 underline underline-offset-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Tabs */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-800 mb-2">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "table", label: "Table (4+ Guests)" },
                        { id: "cupping", label: "Private Cupping" },
                        { id: "brunch", label: "Group Brunch" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: item.id })}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.inquiryType === item.id
                              ? "bg-espresso-950 text-cream-50 border-espresso-950"
                              : "bg-cream-100 hover:bg-cream-200/60 text-espresso-800 border-subtle"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className={`w-full bg-cream-100 border rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none transition-colors ${
                          formErrors.name ? "border-red-500" : "border-subtle focus:border-caramel-500"
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {formErrors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@example.com"
                        className={`w-full bg-cream-100 border rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none transition-colors ${
                          formErrors.email ? "border-red-500" : "border-subtle focus:border-caramel-500"
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Party Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(503) 555-0192"
                        className={`w-full bg-cream-100 border rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none transition-colors ${
                          formErrors.phone ? "border-red-500" : "border-subtle focus:border-caramel-500"
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                        Party Size
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full bg-cream-100 border border-subtle focus:border-caramel-500 rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none"
                      >
                        <option value="1">1 Guest (Single Taster)</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7+">7+ Guests (Large Party)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full bg-cream-100 border rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none transition-colors ${
                          formErrors.date ? "border-red-500" : "border-subtle focus:border-caramel-500"
                        }`}
                      />
                      {formErrors.date && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {formErrors.date}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-cream-100 border border-subtle focus:border-caramel-500 rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none"
                      >
                        <option value="08:00">08:00 AM (Early Roast)</option>
                        <option value="09:30">09:30 AM (Morning Warmth)</option>
                        <option value="11:00">11:00 AM (Brunch Prime)</option>
                        <option value="12:30">12:30 PM (Midday)</option>
                        <option value="14:00">02:00 PM (Afternoon Filter)</option>
                        <option value="15:30">03:30 PM (Slow Drip Reserve)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Requests */}
                  <div>
                    <label className="block text-xs font-medium text-espresso-800 mb-1.5">
                      Special Notes, Occasions or Dietary Allergies
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Birthday breakfast, gluten sensitivity, or preferred table in the sunlit back room..."
                      className="w-full bg-cream-100 border border-subtle focus:border-caramel-500 rounded-xl px-4 py-2.5 text-xs text-espresso-950 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-espresso-950 hover:bg-caramel-600 text-cream-50 font-semibold py-3.5 rounded-full text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Submit Reservation Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 text-caramel-400" />
                  </button>

                  <p className="text-[11px] text-espresso-500 text-center">
                    No deposit required. Reservations are held for 15 minutes past scheduled time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Guest FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-10">
          <span className="font-editorial-subheading text-caramel-700 tracking-[0.25em] text-xs font-semibold block mb-2">
            Visitor Inquiries
          </span>
          <h3 className="font-editorial-heading text-3xl sm:text-4xl text-espresso-950 font-normal">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-cream-50 rounded-2xl border border-subtle overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg font-medium text-espresso-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-caramel-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-espresso-700 font-light leading-relaxed border-t border-subtle/50 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
