"use client";

import pdfjs from "pdfjs";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const Dropzone = () => {
  const [fileName, setFileName] = useState("");
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hiddenFileInput.current!.click();
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setFileName(file!.name);

    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function (e) {
      const result = e.target?.result;
      extractText(result!);
    };
  };

  async function extractText(url: string | ArrayBuffer) {
    console.log("AAAA", pdfjs);
    const document = new pdfjs.Document();
    const test = document(url);
  }

  return (
    <form
      className="flex flex-col items-center justify-center border-2
      border-dashed gap-6 p-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="UploadFileBtn" className="text-xl font-semibold">
        Sube tu curriculum
      </label>
      <button
        id="UploadFileBtn"
        className="bg-black px-4 py-2 text-white rounded-md"
        type="submit"
      >
        Subir
      </button>
      <input
        className="hidden"
        type="file"
        ref={hiddenFileInput}
        onChange={handleUpload}
        accept="application/pdf"
      />
      {Boolean(fileName) && <small>{fileName}</small>}
    </form>
  );
};

export default Dropzone;
