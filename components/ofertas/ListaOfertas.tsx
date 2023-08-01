// "use client";

// import Link from "next/link";
// import Oferta from "./Oferta";
// import { Oferta as OfertaType } from "./Ofertas.d";

// interface ListaOfertasProps {
//   ofertas: OfertaType[];
// }

// const ListaOfertas = ({ ofertas }: ListaOfertasProps) => {
//   return (
//     <ul className="grid grid-cols-3 gap-4">
//       {ofertas.map(({ id, title, salaryDescription, author }) => {
//         return (
//           <Link href={`/ofertas/${id}`}>
//             <Oferta
//               key={id}
//               title={title}
//               salaryDescription={salaryDescription}
//               authorName={author.name}
//             />
//           </Link>
//         );
//       })}
//     </ul>
//   );
// };

// export default ListaOfertas;
