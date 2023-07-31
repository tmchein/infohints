import Dropzone from "@/components/dropzone";

export default async function Recomendaciones() {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <Dropzone uploadApiRoute="/api/extractText" />
    </main>
  );
}
