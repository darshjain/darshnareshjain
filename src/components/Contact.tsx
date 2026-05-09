"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const RECIPIENT = "jiandrash@gmail.com";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = formData.name.value.trim();
    const email = formData.email.value.trim();
    const message = formData.message.value.trim();

    const subject = `Portfolio inquiry from ${name || "a visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(defaultFormState);
    }, 600);
  };

  const inputClasses =
    "w-full px-6 py-4 rounded-2xl glass border border-neutral-200 dark:border-zinc-800 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all duration-200 text-sm bg-white/50 dark:bg-zinc-900/50 placeholder:text-neutral-400 dark:placeholder:text-zinc-600";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-2xl"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-2">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className={inputClasses}
            value={formData.name.value}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                name: { value: e.target.value, error: "" },
              })
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-2">
            Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className={inputClasses}
            value={formData.email.value}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                email: { value: e.target.value, error: "" },
              })
            }
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-2">
          Message
        </label>
        <textarea
          placeholder="How can I help you?"
          rows={6}
          className={cn(inputClasses, "resize-none")}
          value={formData.message.value}
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              message: { value: e.target.value, error: "" },
            })
          }
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <button
          disabled={isSubmitting}
          className="w-full sm:w-auto px-12 py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 shadow-lg shadow-accent/20"
          type="submit"
        >
          {isSubmitting ? "Opening email…" : "Send Message"}
        </button>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Submitting opens your email client to send to{" "}
          <a
            href={`mailto:${RECIPIENT}`}
            className="text-accent font-semibold hover:underline"
          >
            {RECIPIENT}
          </a>
          .
        </p>
      </div>
    </motion.form>
  );
};
