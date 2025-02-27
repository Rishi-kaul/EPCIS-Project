import { NextResponse } from "next/server";
import OpenAI from "openai";
import { connectToDatabase } from "../../../lib/mongodb";
import Resume from "../../../models/Resume";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export async function POST(req) {
  const { name, email } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: `Generate a resume for ${name}` }],
  });

  await connectToDatabase();
  await Resume.create({ name, email, resumeContent: response.choices[0].message.content });

  return NextResponse.json({ resume: response.choices[0].message.content });
}
