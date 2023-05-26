import PdfParse from "@cyber2024/pdf-parse-fixed";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("pdfFile") as Blob;
  const arrayBuffer = await file!.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const rawPdf = await PdfParse(buffer);

  const parsedPDF = rawPdf.text;

  return NextResponse.json({ data: parsedPDF });
}
