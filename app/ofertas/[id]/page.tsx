import { PageProps } from "@/.next/types/app/page";
import Link from "next/link";

async function descripcionOferta(ofertaId: string) {
  const descripcion = await fetch(
    `https://api.infojobs.net/api/7/offer/${ofertaId}`,
    {
      headers: {
        Authorization: process.env.AUTHORIZATION_STR || "",
      },
    }
  );

  return await descripcion.json();
}
// TODO: Tenemos que guardar la descripción de la oferta en algun lado
export default async function OfertasId({ params: { id } }: PageProps) {
  const oferta = await descripcionOferta(id);
  return (
    <main className="w-full min-h-screen bg-slate-50 flex justify-center items-center">
      <article
        className="max-w-4xl flex flex-col gap-4 bg-slate-100 px-12 py-4
        rounded-lg"
      >
        <header>
          <h1 className="text-2xl font-semibold">{oferta.title}</h1>
        </header>
        <section>
          <p>Descripción: {oferta.description}</p>
        </section>
        <footer className="flex justify-between">
          <section className="flex flex-col">
            <span>
              Salario:{" "}
              <span className="bg-red-300 px-3 rounded-full">
                {oferta.salaryDescription}
              </span>
            </span>
            <span>
              Tipo de empleo:{" "}
              <span className="bg-emerald-300 px-3 rounded-full">
                {oferta.jobLevel.value}
              </span>
            </span>
          </section>
          <Link
            href={`/ofertas/${id}/recomendaciones`}
            className="px-4 py-2 rounded-md bg-black text-white font-bold
            w-max flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
          >
            Analizar mi curriculum
          </Link>
        </footer>
      </article>
    </main>
  );
}
