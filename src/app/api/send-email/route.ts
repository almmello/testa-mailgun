import { NextResponse } from 'next/server';
import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(request: Request) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "API_KEY",
    url: process.env.MAILGUN_API_URL || undefined,
  });

  try {
    const formData = await request.json();
    const { to, subject, text } = formData;

    console.log("Enviando email para:", to);
    console.log("Assunto:", subject);
    console.log("Mensagem:", text);
    console.log("Endpoint:", process.env.MAILGUN_API_URL || 'https://api.mailgun.net');
    console.log("Domínio:", process.env.MAILGUN_DOMAIN);
    console.log("Remetente:", `${process.env.MAILGUN_FROM_NAME} <${process.env.MAILGUN_FROM_EMAIL}>`);

    const data = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: `${process.env.MAILGUN_FROM_NAME} <${process.env.MAILGUN_FROM_EMAIL}>`,
      to: [to],
      subject: subject,
      text: text,
    });

    console.log("Resposta do Mailgun:", data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Erro ao enviar email:', error, error?.response?.body);
    return NextResponse.json({ success: false, error: error.message, details: error?.response?.body }, { status: 500 });
  }
} 