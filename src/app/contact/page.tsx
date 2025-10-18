"use client";
import { useState } from "react";
// npm i @emailjs/browser
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceID = "service_6jdi59o";
  const templateID = "template_e1ju0sd";
  const publicKey = "bfztpk5UuC5dTuHUA"; // EmailJS public key

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(serviceID, templateID, formData, { publicKey });
      alert("Mesaj başarıyla gönderildi!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("FAILED...", err);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <fieldset className="contact-form shadow flex flex-col gap-3 p-4 rounded">
          <legend>Contact Me</legend>

          <label htmlFor="name">Name:</label>
          <input
            className="border p-2 rounded"
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">E-Mail:</label>
          <input
            className="border p-2 rounded"
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            className="border p-2 rounded"
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
          />

          <button
            className="bg-blue-500/60 cursor-pointer text-white p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Gönderiliyor..." : "Send"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
