import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">Infohints</h1>
      <h2 className="max-w-md text-center">
        Encuentra recomendaciones para mejorar tu curriculum basado en ofertas
        reales
      </h2>
      <Link
        className="mt-8 bg-gray-700 px-2 py-4 text-white rounded-md hover:bg-black transition-colors duration-300"
        href="/ofertas"
      >
        Busca ofertas
      </Link>
    </main>
  );
}
