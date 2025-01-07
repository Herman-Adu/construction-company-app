"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendForm(
  prevState: { message: string },
  formData: FormData
) {
  // schema for email data
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    message: z.string().min(1),
  });

  // safe parse the inputs
  const parse = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  // check for safe pares
  if (!parse.success) {
    return { message: "error" };
  }

  // destructure the data from parse
  const { name, email, phone, message } = parse.data;

  try {
    const { error } = await resend.emails.send({
      from: `${phone} <onboarding@resend.dev>`,
      to: "herman@adudev.co.uk",
      subject: `New message from ${name}`,
      html: `<p>${email}: <br /><br /> ${message}</p>`,
    });

    if (error) {
      return { message: "Error" };
    }

    return { message: "success" };

    //
  } catch (error) {
    return { message: "Error " };
  }
}
