// Real Lusion-derived chrome (pill nav, corner-plus framing, canvas-panel hero,
// restrained-weight type) — from live recon 2026-07-09, docs/research/PAGE_TOPOLOGY.md.
// Brand: Sultan's gold (#C9A24B), NOT Lusion's blue/white/black — craft, not copy.

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV — pill buttons, wordmark left (real Lusion pattern) */}
      <nav className="sticky top-0 z-50 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm tracking-wide font-normal">Sultan<span className="text-[#C9A24B]">.</span></span>
          <div className="flex items-center gap-2">
            <a href="#contact" className="rounded-full bg-[#2B2E3A] px-6 py-3 text-sm text-white transition-colors hover:bg-[#3a3e4d]">
              Нанять
            </a>
            <a href="#about" className="rounded-full bg-[#E4E6EF] px-6 py-3 text-sm text-black transition-colors hover:bg-[#d8dae5]">
              О себе
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — headline + canvas-panel (corner-plus framing, real Lusion device) */}
      <header className="px-6 pt-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-2xl text-3xl font-normal leading-tight tracking-tight md:text-4xl">
            Маркетинг и рост, которые двигают выручку — не посты и отчёты
          </h1>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0B0B10] md:aspect-[21/9]">
            {/* corner plus-marks — real Lusion framing device */}
            <span className="absolute left-4 top-4 text-lg text-white/40">+</span>
            <span className="absolute right-4 top-4 text-lg text-white/40">+</span>
            <span className="absolute bottom-4 left-4 text-lg text-white/40">+</span>
            <span className="absolute bottom-4 right-4 text-lg text-white/40">+</span>

            {/* placeholder gold panel content — real 3D hero built next cycle */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-medium text-[#C9A24B] md:text-7xl">+64%</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/50">рост OTAN за 2 года моей работы</div>
              </div>
            </div>

            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-widest text-white/40">
              Листай вниз
            </span>
          </div>
        </div>
      </header>

      {/* OTAN CASE */}
      <section id="otan" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-5">
            <span className="text-sm text-[#C9A24B]">01</span>
            <h2 className="text-2xl font-normal md:text-3xl">OTAN</h2>
            <span className="ml-auto text-sm text-black/50">Заместитель директора · 08.2023 — сейчас</span>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-black/70">
            Выстроил полный цикл продукт → упаковка → продажи → логистика → сервис, вывел рекламу в устойчивую прибыль.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 md:grid-cols-4">
            {[
              { n: "90.7M", c: "Выручка 2024, ₸" },
              { n: "6.3×", c: "Средний ROAS" },
              { n: "167M ₸", c: "от рекламы" },
              { n: "80%", c: "Доставок ≤3 дня" },
            ].map((s) => (
              <div key={s.c} className="bg-[#F0F1FA] p-6">
                <div className="text-3xl font-medium">{s.n}</div>
                <div className="mt-2 text-xs text-black/50">{s.c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#0B0B10] p-10 text-white md:p-16">
          <span className="text-xs uppercase tracking-widest text-white/50">Свяжитесь со мной</span>
          <h2 className="mt-4 text-4xl font-normal md:text-6xl">
            Давайте сделаем <span className="text-[#C9A24B]">цифры</span>.
          </h2>
          <a
            href="mailto:kazsultan.uni@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#C9A24B] px-7 py-4 text-sm font-medium text-[#0B0B10] transition-colors hover:bg-[#D9BC7E]"
          >
            kazsultan.uni@gmail.com ↗
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 text-xs text-black/40 md:px-10">
        <div className="mx-auto flex max-w-6xl justify-between">
          <span>© {new Date().getFullYear()} Sultan Kazbek</span>
          <span>Craft-clone recon V1 — 3D hero next cycle</span>
        </div>
      </footer>
    </div>
  );
}
