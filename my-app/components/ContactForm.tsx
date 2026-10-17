"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatusMessage("");

    const formData = new FormData(formRef.current);
    const nameVal = formData.get("name") as string;
    const subjectVal = formData.get("subject") as string;
    const emailVal = formData.get("email") as string;
    const messageVal = formData.get("message") as string;

    const templateParams = {
      name: nameVal,
      from_name: nameVal,
      title: subjectVal,
      subject: subjectVal,
      email: emailVal,
      sender_mail: emailVal,
      sender_email: emailVal,
      reply_to: emailVal,
      user_email: emailVal,
      senders_mail: emailVal,
      senders_email: emailVal,
      from_email: emailVal,
      user_mail: emailVal,
      mail: emailVal,
      sender: emailVal,
      message: messageVal,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
          setIsSubmitting(false);
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          setStatusMessage("Failed to send the message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {statusMessage && <p>{statusMessage}</p>}
    </form>
  );
}
