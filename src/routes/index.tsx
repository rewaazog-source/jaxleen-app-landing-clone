import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const APK_URL = 'https://www.upload-apk.com/en/MGO2XWqNRuQ2QBW'

const portraits = [
  'https://customer-assets-agu9un31.emergentagent.net/job_jaxleen-app/artifacts/dz0aw73e_IMG_20260802_142232_442.jpg',
  'https://customer-assets-agu9un31.emergentagent.net/job_jaxleen-app/artifacts/nkkvl150_IMG_20260802_142232_111.jpg',
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'JAXLEEN — Meet the moment.' },
      {
        name: 'description',
        content:
          'Jaxleen brings a more confident kind of connection to your screen.',
      },
      { name: 'theme-color', content: '#050505' },
    ],
  }),
  component: Home,
})

function Home() {
  const [downloading, setDownloading] = useState(false)

  const downloadApp = () => {
    setDownloading(true)

    toast.success('Opening Jaxleen download', {
      description: 'Taking you to the app download.',
    })

    window.setTimeout(() => {
      window.location.assign(APK_URL)
    }, 450)
  }

  return (
    <main className="jaxleen-page">
      <div className="noise" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {/* NAVBAR */}
      <header className="nav">
        <div className="brand">
          JAXLEEN<span>.</span>
        </div>

        <div className="age-pill">
          <ShieldCheck size={14} />
          <span>18+ ONLY</span>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" />
            FOR GROWN-UP CONNECTIONS
          </div>

          <h1>
            Meet the
            <br />
            <em>moment.</em>
          </h1>

          <p className="hero-description">
            Jaxleen brings a more confident kind of connection to your screen.
            Step into something made for adults.
          </p>

          {/* PREMIUM CTA */}
          <div className="download-wrap">
            <button
              className={`download-button ${downloading ? 'loading' : ''}`}
              onClick={downloadApp}
              type="button"
            >
              <div className="button-glow" />

              <span className="button-content">
                <span className="download-icon">
                  {downloading ? (
                    <Download className="spin" size={21} />
                  ) : (
                    <Download size={21} />
                  )}
                </span>

                <span className="button-text">
                  <strong>
                    {downloading
                      ? 'OPENING DOWNLOAD'
                      : 'DOWNLOAD THE OFFICIAL JAXLEEN APK'}
                  </strong>
                  <small>Android · Free download</small>
                </span>

                <ArrowUpRight className="arrow" size={21} />
              </span>
            </button>

            <div className="download-meta">
              <Check size={13} />
              <span>Official Android download</span>
              <span className="meta-dot">•</span>
              <span>Fast &amp; simple</span>
            </div>
          </div>

          <div className="scroll-hint">
            <ArrowDown size={14} />
            <span>SCROLL TO DISCOVER</span>
          </div>
        </div>

        {/* VISUAL */}
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="portrait-frame">
            <div className="portrait-glow" />

            <div className="portrait-grid">
              {portraits.map((src, index) => (
                <div className="portrait" key={src}>
                  <img
                    src={src}
                    alt={`Jaxleen ${index + 1}`}
                  />

                  <div className="portrait-shade" />

                  <span className="portrait-number">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="visual-label">
              <span>JAXLEEN</span>
              <span>CONNECTION / 01</span>
            </div>
          </div>

          <div className="floating-card card-top">
            <Sparkles size={16} />
            <div>
              <strong>Made for adults</strong>
              <span>18+ experience</span>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <Smartphone size={16} />
            <div>
              <strong>Android ready</strong>
              <span>Download &amp; start</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOWER SECTION */}
      <section className="experience">
        <div className="experience-heading">
          <span>01 / THE EXPERIENCE</span>
          <h2>
            Something
            <br />
            <em>different.</em>
          </h2>
        </div>

        <div className="experience-grid">
          <article>
            <span>01</span>
            <h3>Confident</h3>
            <p>
              A cleaner, more intentional way to step into new conversations.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Private</h3>
            <p>
              Designed around the feeling of a personal space made for adults.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Immediate</h3>
            <p>
              Download the Android app and get straight into the experience.
            </p>
          </article>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-glow" />

        <span>READY WHEN YOU ARE</span>

        <h2>
          Meet the
          <br />
          <em>moment.</em>
        </h2>

        <button className="final-button" onClick={downloadApp}>
          <Download size={18} />
          DOWNLOAD JAXLEEN
          <ArrowUpRight size={18} />
        </button>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          JAXLEEN<span>.</span>
        </div>

        <div>
          YOU MUST BE 18 OR OLDER TO CONTINUE
        </div>

        <div>
          © {new Date().getFullYear()} JAXLEEN
        </div>
      </footer>
    </main>
  )
}
