import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-[95vw] items-center justify-center py-20">
      <div className="max-w-2xl rounded-[2.5rem] border border-black/5 bg-white p-10 text-center shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic">404</p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-navy md:text-6xl">
          Stránka sa nenašla.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy/68">
          Skúste sa vrátiť na domovskú stránku alebo otvorte služby, referencie či kontakt.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-navy px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white italic transition-colors hover:bg-primary"
        >
          Späť domov
        </Link>
      </div>
    </main>
  );
}
