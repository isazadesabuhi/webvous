import { NextResponse } from "next/server";
import { Resend } from "resend";

import { supabase } from "@/lib/supabase";

type ContactPayload = {
  fullName: string;
  firstName: string;
  phone?: string;
  email: string;
  services: string[];
  message: string;
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM;
const resendTo = process.env.RESEND_TO;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (
      !isNonEmptyString(payload.fullName) ||
      !isNonEmptyString(payload.firstName) ||
      !isNonEmptyString(payload.email) ||
      !isNonEmptyString(payload.message) ||
      !Array.isArray(payload.services)
    ) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 },
      );
    }

    const { error } = await supabase.from("contact_messages").insert({
      full_name: payload.fullName.trim(),
      first_name: payload.firstName.trim(),
      phone: payload.phone?.trim() || null,
      email: payload.email.trim(),
      services: payload.services,
      message: payload.message.trim(),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!resendApiKey || !resendFrom || !resendTo) {
      return NextResponse.json(
        { error: "Missing email configuration" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const emailResult = await resend.emails.send({
      from: resendFrom,
      to: resendTo,
      subject: "Nouveau message de contact",
      text: [
        `Nom complet: ${payload.fullName}`,
        `Prénom: ${payload.firstName}`,
        `Téléphone: ${payload.phone ?? "-"}`,
        `Email: ${payload.email}`,
        `Services: ${payload.services.join(", ") || "-"}`,
        "",
        payload.message,
      ].join("\n"),
    });

    if (emailResult.error) {
      return NextResponse.json(
        { error: emailResult.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Malformed request" },
      { status: 400 },
    );
  }
}
