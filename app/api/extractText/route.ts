import { NextRequest, NextResponse } from "next/server";
import PdfParse from "pdf-parse";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("pdfFile") as Blob;
  const arrayBuffer = await file!.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const parseBuffer = await PdfParse(buffer);
  const data = parseBuffer.numpages;
  return NextResponse.json({ data: "hola" });
}
