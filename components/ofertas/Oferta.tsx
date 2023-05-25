import styles from "./Oferta.module.css";

interface OfertaProps {
  title: string;
  salaryDescription: string;
  authorName: string;
}

const Oferta = ({ title, salaryDescription, authorName }: OfertaProps) => {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
  return (
    <li className="flex max-w-xs flex-col items-center">
      <div
        onMouseMove={handleMouseMove}
        className={`${styles.card} group relative w-full h-full
        cursor-pointer rounded-xl
        bg-black bg-opacity-10 before:absolute
        before:top-0 before:left-0
        before:h-full before:w-full
        before:rounded-border-inherit before:opacity-0 before:transition-opacity
        before:duration-500 before:content-['']
        hover:before:opacity-100`}
      >
        <div
          className={`${styles.card_border} absolute
        top-0 left-0
        h-full w-full
        rounded-border-inherit opacity-0 transition-opacity
        duration-500 content-['']
        group-hover:opacity-100`}
        />
        <div
          className="relative z-[2] m-[1px] flex h-[calc(100%-2px)]
        w-[calc(100%-2px)] flex-col rounded-border-inherit bg-slate-100 p-4"
        >
          <h3 className="text-xl font-medium text-midnight">{title}</h3>
          <p className="mt-1 flex-1 text-gray-400">{salaryDescription}</p>
          <div className="mt-4 flex items-center space-x-2 text-gray-500">
            <p className="font-mono text-sm">{authorName}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Oferta;
