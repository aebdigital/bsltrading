import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-[95vw] items-center justify-center py-20">
      <div className="max-w-2xl border border-black/5 bg-white p-10 text-center shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
        <p className="text-[11px] font-black uppercase tracking-normal text-primary">
          Chyba 404
        </p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-navy md:text-7xl">
          Stránka nebola nájdená
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy/68">
          Prepáčte, ale stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-normal text-white transition-colors hover:bg-navy"
        >
          Späť domov
        </Link>
      </div>
    </main>
  );
}
