// Real Lusion-derived chrome (pill nav, corner-plus framing, canvas-panel hero,
// restrained-weight type) — from live recon 2026-07-09, docs/research/PAGE_TOPOLOGY.md.
// Brand: Sultan's gold (#C9A24B), NOT Lusion's blue/white/black — craft, not copy.
import Hero3D from "@/components/Hero3D";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV — pill buttons, wordmark left (real Lusion pattern) */}
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#F0F1FA]/90 px-6 py-5 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm tracking-wide font-normal">Sultan<span className="text-[#C9A24B]">.</span></span>
          <div className="hidden items-center gap-1 text-sm text-black/60 md:flex">
            <a href="#otan" className="px-3 py-2 hover:text-black">OTAN</a>
            <a href="#pitches" className="px-3 py-2 hover:text-black">Разборы</a>
            <a href="#compare" className="px-3 py-2 hover:text-black">Сравнение</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="rounded-full bg-[#2B2E3A] px-6 py-3 text-sm text-white transition-colors hover:bg-[#3a3e4d]">
              Нанять
            </a>
            {/* real Lusion mobile behavior: second pill collapses away below md, single CTA remains */}
            <a href="#about" className="hidden rounded-full bg-[#E4E6EF] px-6 py-3 text-sm text-black transition-colors hover:bg-[#d8dae5] md:inline-block">
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

          {/* real Lusion mobile behavior: hero panel goes portrait-tall on small screens */}
          <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0B0B10] sm:aspect-[16/9] md:aspect-[21/9]">
            {/* corner plus-marks — real Lusion framing device */}
            <span className="absolute left-4 top-4 text-lg text-white/40">+</span>
            <span className="absolute right-4 top-4 text-lg text-white/40">+</span>
            <span className="absolute bottom-4 left-4 text-lg text-white/40">+</span>
            <span className="absolute bottom-4 right-4 text-lg text-white/40">+</span>

            {/* real Three.js hero — glossy gold primitive cluster (Lusion's stylistic DNA, our brand) */}
            <Hero3D />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-medium text-[#C9A24B] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] md:text-7xl">+64%</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/60 drop-shadow-md">рост OTAN за 2 года моей работы</div>
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

      {/* EARLY PROJECTS */}
      <section id="early" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-5">
            <span className="text-sm text-[#C9A24B]">02</span>
            <h2 className="text-2xl font-normal md:text-3xl">Ранние проекты</h2>
            <span className="ml-auto text-sm text-black/50">2021 — 2022</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { tag: "MedTech · cerebra.kz", h: "Бренд с нуля", p: "Диагностика инсульта. Построил присутствие с нуля до растущей аудитории.", n: "377", l: "охват/нед." },
              { tag: "Соц. миссия · neuro.damu", h: "350K просмотров", p: "Фонд по инсульту. Тексты с нейрохирургом, запустил рекламную кампанию.", n: "900", l: "подписчиков" },
            ].map((c) => (
              <div key={c.h} className="rounded-2xl border border-black/10 bg-white/50 p-8 transition-shadow hover:shadow-lg">
                <span className="text-[11px] uppercase tracking-wider text-black/40">{c.tag}</span>
                <h3 className="mt-4 text-2xl font-normal">{c.h}</h3>
                <p className="mt-2 text-sm text-black/60">{c.p}</p>
                <div className="mt-6 border-t border-black/10 pt-4">
                  <div className="text-2xl font-medium text-[#C9A24B]">{c.n}</div>
                  <div className="text-xs text-black/40">{c.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PITCH GALLERY */}
      <section id="pitches" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-baseline gap-4 border-b border-black/10 pb-5">
            <span className="text-sm text-[#C9A24B]">03</span>
            <h2 className="text-2xl font-normal md:text-3xl">Разборы</h2>
            <span className="ml-auto text-sm text-black/50">20 брендов, самостоятельно</span>
          </div>
          <p className="mb-8 max-w-2xl text-black/60">
            Разбираю маркетинг казахстанских брендов по фреймворкам. <b className="text-black">Я не работал в этих компаниях</b> — открой любой разбор.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {[
              ["newton-group", "Newton Group", "Образование"],
              ["bm-consulting", "BM Consulting", "Консалтинг"],
              ["kabelnyy-alyans", "Кабельный Альянс", "Промышленный B2B"],
              ["anga-triumph", "Anga Triumph", "Медицина"],
              ["baxadir-med", "Baxadir Med", "Медицина"],
              ["bronx-fitness", "Bronx Fitness", "Фитнес"],
              ["divera-olymp", "Divera · Olymp", "Медицина"],
              ["ideal-plintus", "IDEAL Plintus", "Промышленный B2B"],
              ["ager", "Ager", "Мебель"],
              ["aula-kz", "Aula.kz", "SaaS / ЖКХ"],
              ["elite-kz", "Elite", "Executive Search"],
              ["rt-group", "RT Group", "Трудовая миграция"],
              ["qazna-consulting", "Qazna Consulting", "Юр. услуги"],
              ["nurgazy-clinic", "Нургазы Клиника", "Медицина"],
              ["animed", "ANIMED", "Медицина"],
              ["it-analytics", "IT Analytics", "Retail Data"],
              ["astana-hub", "Astana Hub", "Стартап-акселерация"],
              ["ocean-baby", "Ocean Baby", "Детские услуги"],
              ["organic-fish", "Organic Fish", "Food"],
              ["smartapps", "SmartApps", "IT-аутсорс"],
            ].map(([slug, name, vert]) => (
              <a
                key={slug}
                href={`pitches/${slug}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-black/10 bg-white/50 p-4 transition-all hover:-translate-y-0.5 hover:border-[#C9A24B] hover:shadow-md"
              >
                <span className="text-[10px] uppercase tracking-wide text-black/40">{vert}</span>
                <div className="mt-2 text-sm font-medium">{name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HONEST COMPARISON */}
      <section id="compare" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-5">
            <span className="text-sm text-[#C9A24B]">04</span>
            <h2 className="text-2xl font-normal md:text-3xl">Кого вы на самом деле нанимаете</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white/50 p-7">
              <div className="text-lg font-medium">Джуниор</div>
              <div className="mt-1 text-xs text-black/40">Дёшево</div>
              <ul className="mt-5 space-y-2 text-sm text-black/60">
                <li>− Нужно управлять</li>
                <li>− Не видит систему</li>
                <li>− Нет ответственности</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/50 p-7">
              <div className="text-lg font-medium">Сеньор-агентство</div>
              <div className="mt-1 text-xs text-black/40">3× дороже</div>
              <ul className="mt-5 space-y-2 text-sm text-black/60">
                <li className="text-[#8a7128]">✓ Стратегия и опыт</li>
                <li>− Медленно</li>
                <li>− Отчёты, не погружение</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#0B0B10] p-7 text-white">
              <div className="text-lg font-medium">Sultan<span className="text-[#C9A24B]">.</span></div>
              <div className="mt-1 text-xs text-[#C9A24B]">Сеньорский результат</div>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                <li className="text-[#C9A24B]">✓ 2 года P&amp;L-опыта (OTAN)</li>
                <li className="text-[#C9A24B]">✓ Владею результатом end-to-end</li>
                <li className="text-[#C9A24B]">✓ AI-native — глубина за дни</li>
                <li className="text-[#C9A24B]">✓ Доступность junior-найма</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-5">
            <span className="text-sm text-[#C9A24B]">05</span>
            <h2 className="text-2xl font-normal md:text-3xl">Как работаю</h2>
          </div>
          <div className="rounded-2xl bg-[#EDEEF7] p-10">
            <h3 className="max-w-xl text-2xl font-normal leading-snug">
              Иду в глубину агентства за дни, а не недели — работаю AI-native.
            </h3>
            <p className="mt-4 max-w-lg text-black/60">
              ИИ + система из 100+ фреймворков даёт каждому брифу строгость стратега.{" "}
              <b className="text-black">Но решение «что здесь верно» принимаю я — это и есть то, что вы нанимаете.</b>
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-5">
            <span className="text-sm text-[#C9A24B]">06</span>
            <h2 className="text-2xl font-normal md:text-3xl">О себе</h2>
          </div>
          <div className="max-w-2xl text-2xl font-normal leading-snug">
            Маркетолог, который владеет <span className="text-[#C9A24B]">результатом</span>, а не задачами.
          </div>
          <p className="mt-4 max-w-lg text-black/60">
            Sultan Kazbek, Астана, 23. Ищу роль в growth/маркетинге/операциях.
          </p>
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
          <span>Craft-clone recon — 3D hero next cycle</span>
        </div>
      </footer>
    </div>
  );
}
