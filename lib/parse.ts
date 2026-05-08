"use client";

/**
 * Client-side study guide file parser. PDF and DOCX libs are dynamically
 * imported so they don't land in the initial bundle — they only load when a
 * user actually picks a file.
 */

export interface ParseResult {
  text: string;
  warnings?: string[];
  pages?: number;
}

export class ParseError extends Error {
  constructor(public readonly userMessage: string, cause?: unknown) {
    super(userMessage);
    if (cause) (this as Error & { cause: unknown }).cause = cause;
  }
}

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

export async function parseFile(file: File): Promise<ParseResult> {
  if (file.size > MAX_BYTES) {
    throw new ParseError(
      `File is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max 10 MB.`
    );
  }

  const name = file.name.toLowerCase();
  const ext = name.split(".").pop() || "";

  if (ext === "txt" || ext === "md" || ext === "markdown") {
    return { text: await file.text() };
  }
  if (ext === "docx") return parseDocx(file);
  if (ext === "doc") {
    throw new ParseError(
      "Old-style .doc files aren't supported. Save it as .docx (File → Save As) and try again."
    );
  }
  if (ext === "pdf") return parsePdf(file);

  throw new ParseError(
    `Unsupported file type: .${ext}. Try PDF, DOCX, TXT, or paste the text directly.`
  );
}

async function parseDocx(file: File): Promise<ParseResult> {
  try {
    // Bundler auto-picks the browser build via mammoth's package.json "browser" field.
    const mammoth = await import("mammoth");
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    const text = (result.value || "").trim();
    if (!text) {
      throw new ParseError(
        "We couldn't pull any text out of that .docx. If it's mostly images, try copy/pasting instead."
      );
    }
    return {
      text,
      warnings: result.messages?.slice(0, 3).map((m) => m.message),
    };
  } catch (err) {
    if (err instanceof ParseError) throw err;
    throw new ParseError(
      "Couldn't read that .docx file. It may be corrupt or password protected.",
      err
    );
  }
}

async function parsePdf(file: File): Promise<ParseResult> {
  try {
    const pdfjs = await import("pdfjs-dist");
    // Pin worker to the same version as the lib.
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    const arrayBuffer = await file.arrayBuffer();
    const doc = await pdfjs.getDocument({
      data: new Uint8Array(arrayBuffer),
      // PDFs aren't a security boundary here, but keep these off for safety.
      isEvalSupported: false,
      disableFontFace: true,
    }).promise;

    const pages: string[] = [];
    const pageCount = doc.numPages;
    for (let i = 1; i <= pageCount; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items
        .map((item) => ("str" in item ? (item as { str: string }).str : ""))
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      if (pageText) pages.push(pageText);
    }

    const text = pages.join("\n\n").trim();
    if (!text) {
      throw new ParseError(
        "No text found in that PDF. It may be a scanned image — OCR isn't supported yet, so try copy/pasting the content instead."
      );
    }
    return { text, pages: pageCount };
  } catch (err) {
    if (err instanceof ParseError) throw err;
    const msg = err instanceof Error ? err.message : "unknown error";
    throw new ParseError(`Couldn't read that PDF (${msg}).`, err);
  }
}
