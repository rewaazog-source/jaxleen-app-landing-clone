import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Download, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const portraits = [
  {
    src: 'https://customer-assets-agu9un31.emergentagent.net/job_jaxleen-app/artifacts/dz0aw73e_IMG_20260802_142232_442.jpg',
    label: 'JAXLEEN',
    caption: 'For grown-up connections',
  },
  {
    src: 'https://customer-assets-agu9un31.emergentagent.net/job_jaxleen-app/artifacts/nkkvl150_IMG_20260802_142232_111.jpg',
    label: 'JAXLEEN',
    caption: 'For grown-up connections',
  },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Jaxleen · Meet the moment' },
      { name: 'description', content: 'Jaxleen brings a more confident kind of connection to your screen.' },
      { name: 'theme-color', content: '#0b0a0d' },
    ],
  }),
  component: Home,
})

function Home() {
  const [isOpening, setIsOpening] = useState(false)

  const handleDownload = () => {
    setIsOpening(true)
    toast.success('Opening download', { description: 'Redirecting to the official app download' })
    window.setTimeout(() => {
      window.location.assign('https://www.upload-apk.com/en/MGO2XWqNRuQ2QBW')
    }, 350)
  }

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_33%),radial-gradient(circle_at_45%_92%,color-mix(in_oklch,var(--accent)_46%,transparent),transparent_34%)]" />
      <header className="relative z-10 flex items-center justify-between px-6 py-7 sm:px-10 sm:py-8 lg:px-16">
        <div className="font-serif text-4xl italic leading-none tracking-[-0.16em] text-foreground">J<span className="text-primary">.</span></div>
        <div className="flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
          18+ only
        </div>
      </header>

      <section className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 items-center px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-[520px] animate-fade-in">
            <div className="absolute -bottom-5 left-6 right-[-10px] top-5 bg-primary/10 blur-sm" />
            <div className="relative grid grid-cols-2 gap-1.5 shadow-lg">
              {portraits.map((portrait, index) => (
                <figure key={portrait.src} className={`group relative aspect-[0.4] overflow-hidden bg-muted ${index === 0 ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}>
                  <img src={portrait.src} alt={`Jaxleen portrait ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/75 sm:p-6">
                    <span>{portrait.label}</span><span className="max-w-[95px] text-right">{portrait.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="max-w-[500px] animate-fade-in [animation-delay:120ms] lg:pb-2">
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-primary sm:mb-7">Start sexy chat with me <span aria-hidden="true">◉◉</span></p>
            <h1 className="font-serif text-[clamp(3.6rem,8vw,6.7rem)] leading-[0.84] tracking-[-0.075em] text-foreground">
              Meet the<br /><em className="text-primary">moment.</em>
            </h1>
            <p className="mt-8 max-w-[390px] text-[15px] leading-7 text-foreground/65 sm:text-base">Jaxleen brings a more confident kind of connection to your screen. Step into something made for adults.</p>
            <button type="button" onClick={handleDownload} className="group mt-9 flex min-h-16 w-full items-center justify-between bg-primary px-6 text-left text-sm font-semibold text-primary-foreground shadow-lg transition duration-200 hover:scale-[1.015] hover:brightness-110 active:scale-[0.985] sm:max-w-[380px] sm:px-7">
              <span>{isOpening ? 'Opening download' : 'Download Jaxleen Official App'}</span>
              {isOpening ? <Download className="h-5 w-5 animate-bounce" /> : <ArrowUpRight className="h-5 w-5 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
            </button>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-foreground/45"><Download className="h-3.5 w-3.5" /> Secure download destination · Opens in a new tab</div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 flex items-center justify-center px-6 pb-6 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/35 sm:pb-8">You must be 18 or older to continue <span className="mx-3 text-primary">◉</span> Please enjoy responsibly</footer>
    </main>
  )
}
