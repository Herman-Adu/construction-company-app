"use client";

import React from "react";
import { sendForm } from "@/actions/resend";
import { Button } from "@/components/Button";
import { Input } from "@/components/input";

import { useFormState, useFormStatus } from "react-dom";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";

export const ContactForm = () => {
  const [state, formAction] = useFormState(sendForm, {
    message: "",
  });

  return (
    <form
      action={formAction}
      className="space-y-6 bg-white text-black p-8 rounded-lg"
    >
      <div className="space-y-2 ">
        <p className="text-base font-extrabold">Name</p>
        <Input name="name" type="text" required />
      </div>

      <div className="space-y-2 ">
        <p className="text-base font-extrabold">Email</p>
        <Input name="email" type="email" required />
      </div>

      <div className="space-y-2 ">
        <p className="text-base font-extrabold">Phone</p>
        <Input name="phone" type="text" required />
      </div>

      <div className="space-y-2 ">
        <p className="text-base font-extrabold">Message</p>
        <textarea
          name="message"
          className="w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div className="flex justify-center">
        <SubmitButton />
      </div>

      {/* email sent successfully */}
      {state?.message === "success" && (
        <div className="flex items-center space-x-2 text--green-500">
          <BiCheckCircle color="green" />
          <p aria-live="polite" className="text-base not-sr-only">
            Your message has been sent successfully
          </p>
        </div>
      )}

      {/* email failed to sent */}
      {state?.message === "error" && (
        <div className="flex items-center space-x-2 text--green-500">
          <BiErrorCircle color="red" />
          <p aria-live="polite" className="text-base not-sr-only">
            An error occurred while sending your message
          </p>
        </div>
      )}
    </form>
  );
};

const SubmitButton = () => {
  const { pending: isPending } = useFormStatus();

  return <button type="submit">{isPending ? "Sending" : "Send"}</button>;
};
