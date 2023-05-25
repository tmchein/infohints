import ListaOfertas from "@/components/ofertas/ListaOfertas";

async function obtenerOfertas() {
  const resultado = await fetch("https://api.infojobs.net/api/9/offer", {
    cache: "no-store",
    headers: {
      Authorization: process.env.AUTHORIZATION_STR || "",
    },
  });
  const json = await resultado.json();
  return json;
}

export default async function Ofertas() {
  const { items } = await obtenerOfertas();
  return (
    <main className="w-full min-h-screen flex justify-center">
      <section className="max-w-4xl my-16">
        <ListaOfertas ofertas={items} />
      </section>
    </main>
  );
}
